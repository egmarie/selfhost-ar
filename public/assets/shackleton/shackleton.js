window.__DEBUG = true;

import AR from '../ARView.js.js.js';

let arv = new AR.ARView();

function setStatus(msg){
  document.querySelector('#ar-status').innerText = msg;
}

var assets = { 
  Frank_IDLE: 'usdz/Frank_IDLE.usdz'
};

var audio = {};
var buttons = [...document.querySelectorAll('#play-buttons .button')];

for(var button of buttons){
  var key = button.getAttribute('data-asset');
  audio[key] = new Audio(`audio/${key}.wav`);
  audio[key].load();
  assets[key] = `usdz/${key}.usdz`;
}


/****************************
* ARView event listeners
****************************/

// Event fires when each asset is loaded
arv.onLoad( data => {
  console.log('Loaded asset', data);
});

// Event fires when plane is detected 
arv.onPlane( data => {
  console.log('Found plane', data);
});

// Event fires when Apple's guidance overlay goes away
arv.onHideOverlay( data => {
  if(arv.status == 'rendered') return;
  setStatus('Tap to place');
  arv.placeTarget();
});

// Event fires when any asset is rendered
arv.onRender( data => {
  console.log('Rendered asset', data);
});

// Event fires when any character animation starts/stops
arv.onAnimation( data => {
  if(data.status == "stopped" && data.asset != "Frank_IDLE"){
    var playingEl = document.querySelector('.button.playing');
    if(playingEl) playingEl.classList.remove('playing');
    if(audio._current) audio._current = null;
    audio[data.asset].pause();
    audio[data.asset].currentTime = 0;
    arv.place('Frank_IDLE', { play: true, loop: true });
  }
});


/****************************
* Kick off asset loading
****************************/
arv.preload(assets);
arv.showOverlay();

/****************************
* Add button event listeners
****************************/
document.querySelector('body').addEventListener('click', e => {
  if(arv.status == 'plane'){
    arv.onAssetLoad('Frank_IDLE', 
      done => {
        setStatus('');
        arv.place('Frank_IDLE', { play: true, loop: true });
        document.querySelector('#play-buttons').classList.remove('hidden');
      }, 
      wait => {
        console.log('Idle is not yet loaded');
        setStatus('Loading...');
      }
    );
  }
});

for(var button of buttons){
  button.addEventListener('click', function(e) {
    var asset = this.getAttribute('data-asset');
    arv.onAssetLoad(asset, 
      done => { // Once asset is loaded:
        setStatus('');
        if(arv.rendered != asset){
          // swap audio and asset if we've tapped a new icon
          if(audio._current){
            audio[audio._current].pause();
            audio[audio._current].currentTime = 0;
            var playingEl = document.querySelector('.button.playing');
            if(playingEl) playingEl.classList.remove('playing');
          }
          this.classList.add('playing');
          audio[asset].currentTime = 0.2;
          audio[asset].play();
          audio._current = asset;
          arv.place(asset, { play: true });
        }else{
          // pause playback if we've tapped the currently-playing button
          var playingEl = document.querySelector('.button.playing');
          if(playingEl) playingEl.classList.remove('playing');
          audio[asset].pause();
          audio[asset].currentTime = 0;
          audio._current = null;
          arv.place('Frank_IDLE', { play: true, loop: true });
        }      
      }, 
      wait => { // Called if asset needs time to load
        console.log(`${asset} is not yet loaded.`);
        setStatus('Loading...');
      }
    );
  });
}
