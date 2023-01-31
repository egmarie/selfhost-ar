import './smoothscroll.js';

const AR_TAP_MSG = "Move until the shadow settles, then tap to place."

/****************************
* Helpers, Utils
****************************/

const classed = (el, cls, bool) => {
  if(bool){
    el.classList.add(cls);
  }else if(el.classList.contains(cls)){
    el.classList.remove(cls);
  }
}

const status = document.getElementById('ar-status');
const setStatus = (str) => {
  if(!str || str == "") {
    status.innerText = '';
    status.classList.add('hidden');
  }else{
    status.innerText = str;
    status.classList.remove('hidden');
  }
};

var sections = [...document.querySelectorAll('header, section, footer')]
  .map( (el,i) => {
    el.setAttribute('id', 'slide-'+i);
    return { i, el,
      id: 'slide-'+i,
      type: el.tagName,
      arAsset: el.getAttribute('data-ar-src'),
      arId: el.getAttribute('data-ar-id'),
      orderNum: el.getAttribute('data-order-num') && Number(el.getAttribute('data-order-num'))
    }
  });

/****************************
* Configure ARKit Integration
****************************/

import AR from '../ARView.js.js.js.js.js';

let arv = new AR.ARView();

if(!arv.enabled){
  document.body.classList.add('no-ar');
}

// Event fires when each asset is loaded
arv.onLoad( data => {
  console.log('Loaded asset', data);
});

// Event fires when plane is detected 
var hasPlane = false;
arv.onPlane( data => {
  console.log('Found plane', data);
  hasPlane = true;
});

// Event fires when Apple's guidance overlay goes away
arv.onHideOverlay( data => {
  if(arv.status == 'rendered') return;
  hasPlane = true; // I think this is a valid assumption?
  setStatus(AR_TAP_MSG);
  arv.placeTarget();
});

// Event fires when any asset is rendered
arv.onRender( data => {
  console.log('Rendered asset', data);
});

let arVisible = false,
    inARWindow = false,
    hasPlaced = false,
    hasOverlaid = false;

const placeAR = () => {
  console.log('clicked', arv.status, arVisible, inARWindow);
  if(arv.status == 'plane' || arv.status == 'rendered' && !arVisible){
    console.log('placing ar');
    hasPlaced = true;
    arv.onAssetLoad(inARWindow, 
      done => {
        arv.place(inARWindow);
      }, 
      wait => {
        console.log(inARWindow, 'is not yet loaded');
        setStatus('Loading...');
      }
    );
    arVisible = inARWindow;
    article.classList.add('ar-visible');
    setStatus("");
  }
}
for(const el of [...document.querySelectorAll('[data-ar-id]')]){
  el.addEventListener('click', placeAR);
}

function showAR(id, reset){ // called by scroll
  console.log('showar', 'id='+id, 'reset='+reset, 'status='+arv.status);
  if(inARWindow == id && !reset) return;
  inARWindow = id;
  console.log('hasPlane='+hasPlane, 'hasOverlaid='+hasOverlaid, 'status='+status);
  if((!hasPlane || !hasOverlaid) && arv.status != 'overlay'){
    console.log('Showing AR overlay first')
    arv.showOverlay();
    hasOverlaid = true;
    setStatus("Look at the table, and move around")
  }else if(arv.status == 'plane' && !hasPlaced){
    console.log('skipping overlay, running target');
    setStatus(AR_TAP_MSG);
    arv.placeTarget();
  }else if(arv.status == 'plane' || arv.status == 'rendered') {
    console.log('showAR placing object now');
    setStatus("");
    placeAR(id);
  }
}

function hideAR(id){
  if(!inARWindow) return;
  inARWindow = false;
  console.log('HIDING AR', id);
  arVisible = false;
  arv.hide();
  article.classList.remove('ar-visible');
  setStatus('');
}

const arItems = sections
  .filter(d => d.arAsset)
  .reduce( (obj,d) =>
    ({...obj, [d.arId]: d.arAsset}), {});
console.log('preloading', arItems)
arv.preload(arItems);

document.querySelector('#js-reset-ar').addEventListener('click', (e) => {
  console.log('Resetting AR...');
  
  arv.hide();
  hasPlaced = false;
  arVisible = false;
  article.classList.remove('ar-visible');
  showAR(inARWindow, true);
});

/***************
* Scrolly Logic
***************/

var current = 0;
var article = document.querySelector('article');


function updateSection(section){
  const oldAr = sections[current].arId;

  current = section.i;
  classed(article, 'slide-last', section.i == sections.length-1);
  classed(article, 'slide-first', section.i == 0);
  classed(article, 'show-ar', section.arId != null);

  if(section.arId != oldAr){
    if(oldAr) hideAR(oldAr);
    if(section.arId) showAR(section.arId);
  }
}

article.addEventListener('scroll', e => {
  if(article.scrollLeft > (current+0.51) * window.innerWidth){
    updateSection(sections[current + 1]);
  }else if(article.scrollLeft < (current-0.51) * window.innerWidth){
    updateSection(sections[current - 1]);
  }
});

document.querySelector("#js-go-back").addEventListener('click', (e) => {
  if(current == 0) return;
  article.scroll({ left: sections[current - 1].el.offsetLeft, behavior: 'smooth' });
  e.preventDefault();
});
document.querySelector("#js-go-next").addEventListener('click', (e) => {
  if(current == sections.length-1) return;
  article.scroll({ left: sections[current + 1].el.offsetLeft, behavior: 'smooth' });
  e.preventDefault();
});

// Button sorting
function reOrder(blocks, desired){
  const newOrder = [];
  let i = 0

  // Pad front with nulls
  while(blocks[i].orderNum == null){ newOrder.push(blocks[i]); i++; }

  for(const n of desired){
    newOrder.push(...blocks.filter(b => n === b.orderNum));
  }

  // Pad back with nulls
  const rear = [];
  i = blocks.length-1;
  while(blocks[i].orderNum == null){ rear.push(blocks[i]); i--; }
  newOrder.push(...rear.reverse());

  return newOrder;
}


function setVariant(e) {
  document.querySelector('.order-options button.selected').classList.remove('selected');
  e.target.classList.add('selected');

  const order = e.target.getAttribute('data-order').split(',').map(d => Number(d));
  
  const newOrder = reOrder(sections, order);
  sections = newOrder;
  for(const [i,sec] of Object.entries(sections)){
    sec.el.setAttribute('style', `order: ${i};`);
    sec.i = Number(i);
  }
  console.log(sections);
}

for(const btn of [ ...document.querySelectorAll('.order-options button') ]){
  btn.addEventListener('click', setVariant);
}

