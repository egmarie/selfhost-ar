import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"

import { Shackleton } from "./components/shackleton"
import { Finance } from "./components/campaign-finance/campaign-finance"
import {Bars, Map, SphereKeys, Sphere} from "./components/campaign-finance/campaign_sub"
import { Rainforest } from "./components/amz-rainforest/amz-rainforest"
import {Tribe, Soyfarm, Slaughterhouse, Lumberyard, Deforestation} from "./components/amz-rainforest/amz_sub"
import { Home, NoMatch } from "./components/home"
//import {loadThree} from "./components/amz-rainforest/amz-3"
export default function App() { 
const base = process.env.BASE
  const layoutLabels = {
    "sitetitle": "Blue Sky Innovations VR",
    "sitelogo":"",
    "navs": [
    {
      "name": "Home",
      "link": "/",
      "element": Home,
      "greeting": "Welcome",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?"
    },
    {
      "name": "Shackleton",
      "link": "/shackleton",
      "element": Shackleton,
      "subtitle": "A Leadership Experience",
      "img": "",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?"
    },
    {
      "name": "Campaign Finance",
      "link": "/campaign-finance/*",
      "element": Finance,
      "subtitle": "Lorem ipsum dolor sit amet ",
      "img": "",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?",
      "children": [
        {
          "name": "Bars",
          "link": "bars",
          "element": Bars,
          "subtitle": "Lorem ipsum dolor sit amet ",
          "usdz": `${base}/campaign-finance-datavis/ar/bars.reality`,
          "img": `${base}/campaign-finance-datavis/ar/bars.reality`,
        },
        {
          "name": "Map",
          "link": "map",
          "element": Map,
          "subtitle": "Lorem ipsum dolor sit amet ",
          "usdz": `${base}/campaign-finance-datavis/ar/bars.reality`,
          "img": `${base}/campaign-finance-datavis/ar/map.reality`,
        },
        {
          "name": "Spheres-key",
          "link": "spheres-key",
          "element": SphereKeys,
          "subtitle": "Lorem ipsum dolor sit amet ",
          "usdz": `${base}/campaign-finance-datavis/ar/spheres-key.reality`,
          "img": `${base}/campaign-finance-datavis/ar/bars.reality`,
        },
        {
          "name": "Spheres",
          "link": "spheres",
          "element": Sphere,
          "subtitle": "Lorem ipsum dolor sit amet ",
          "usdz": `${base}/campaign-finance-datavis/ar/sphere.reality`,
          "img": `${base}/campaign-finance-datavis/ar/bars.reality`,
        },
      ]
    },
    {
      "name": "Amazon Rainforest",
      "link": "/amazon-rainforest/*",
      "element": Rainforest,
      "subtitle": "Lorem ipsum dolor sit amet ",
      "img": `${base}/amazon-quicklook/img/deforestation.jpg`,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?",
      "children": [
        {
        "name": "Deforestation",
        "link": "deforestation",
        "element": Deforestation,
        "subtitle": "Lorem ipsum dolor sit amet ",
        "usdz": `${base}/amazon-quicklook/usdz/deforestation.usdz`,
        "img": `${base}/amazon-quicklook/img/deforestation.jpg`,
      },
      {
        "name": "Lumberyard",
        "link": "lumberyard",
        "element": Lumberyard,
        "subtitle": "Lorem ipsum dolor sit amet ",
        "usdz": `${base}/amazon-quicklook/usdz/sm_lumberyard.usdz`,
        "img": `${base}/amazon-quicklook/img/lumberyard.jpg`
      },
      {
        "name": "Slaughterhouse",
        "link": "slaughterhouse",
        "element": Slaughterhouse,
        "subtitle": "Lorem ipsum dolor sit amet ",
        "usdz": `${base}/amazon-quicklook/usdz/slaughterhouse.usdz`,
        "img": `${base}/amazon-quicklook/img/slaughterhouse.jpg`,
      },
      {
        "name": "Soyfarm",
        "link": "soyfarm",
        "element": Soyfarm,
        "subtitle": "Lorem ipsum dolor sit amet ",
        "usdz": `${base}/amazon-quicklook/usdz/tribe.usdz`,
        "img": `${base}/amazon-quicklook/img/soyfarm.jpg`, 
      },
      {
        "name": "Tribe",
        "link": "tribe",
        "element": Tribe,
        "subtitle": "Lorem ipsum dolor sit amet",
        "usdz": `${base}/amazon-quicklook/usdz/tribe.usdz`,
        "img": `${base}/amazon-quicklook/img/tribe.jpg`,
      },
      ]
    },
  ]
}
  
  return (
    <>
    {/* // <BrowserRouter> */}
      
    <HeaderLayout labels={layoutLabels} /> 

       <div className="container py-3 py-md-5 px-5">
    <Routes>
    <Route
      path={layoutLabels.navs[0].link}
      element={<Home prjs={layoutLabels.navs} />}
      index/>
      <Route
        path={layoutLabels.navs[1].link}
        element={<Shackleton prjs={layoutLabels.navs} />}/>
      <Route
        path={layoutLabels.navs[2].link}
        element={<Finance prjs={layoutLabels.navs} />}>
            <Route
                path={layoutLabels.navs[2].children[0].link}
                element={<Bars prjs={layoutLabels.navs[2].children[0]} />} />
            <Route
                path={layoutLabels.navs[2].children[1].link}
                element={<Map prjs={layoutLabels.navs[2].children[1]} />} />
            <Route
                path={layoutLabels.navs[2].children[2].link}
                element={<SphereKeys prjs={layoutLabels.navs[2].children[2]} />} />
            <Route
                path={layoutLabels.navs[2].children[3].link}
                element={<Sphere prjs={layoutLabels.navs[2].children[3]} />} />
           </Route>
      <Route
        path={layoutLabels.navs[3].link}
        element={<Rainforest prjs={layoutLabels.navs} />}>
            <Route
                path={layoutLabels.navs[3].children[0].link}
                element={<Deforestation prjs={layoutLabels.navs[3].children[0]} />} />
            <Route
                path={layoutLabels.navs[3].children[1].link}
                element={<Lumberyard prjs={layoutLabels.navs[3].children[1]} />} />
            <Route
                path={layoutLabels.navs[3].children[2].link}
                element={<Slaughterhouse prjs={layoutLabels.navs[3].children[2]} />} />
            <Route
                path={layoutLabels.navs[3].children[3].link}
                element={<Soyfarm prjs={layoutLabels.navs[3].children[3]} />} />
            <Route
                path={layoutLabels.navs[3].children[4].link}
                element={<Tribe prjs={layoutLabels.navs[3].children[4]} />} />
          </Route>
      <Route
        path="*"
        element={<NoMatch />}/>
  </Routes>
      </div>
      
    <FooterLayout labels={layoutLabels} />
    {/* // </BrowserRouter> */}
    </>
  )
}

function HeaderLayout(props) {
  let title = props.labels.sitetitle
  let labels = props.labels.navs
  return (

<header className="bg-light pt-3">
<div className="container">
  <h1 className="display-1">{title}</h1>
  <ul className="nav nav-tabs">
  {labels.map((l) => 
          <li className="nav-item" key={l.name}>
          <Link className="text-muted nav-link" activeclassname="active" to={l.link}>
            {l.name}
          </Link>
          </li>
      )}
  </ul>
</div>
</header>
  )
}

function FooterLayout(props) {
  let labels = props.labels.navs

  return (
    <footer className="border-top pt-4 d-flex justify-content-center">
      <ul className="d-flex">
      {labels.map((l) => 
      <li key={l.name}>
          <p className="small text-center text-muted p-2">
          <Link className="text-muted mr-1" to={l.link}>
            {l.name}
          </Link>
          </p>
          </li>
      )}
      </ul>
  </footer>
  )
}
