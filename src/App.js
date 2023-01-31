import React from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"
import { Shackleton } from "./components/shackleton"
import { Finance } from "./components/campaign-finance"
import { Rainforest } from "./components/amz-rainforest"
import { Home, NoMatch } from "./components/home"
export default function App() {
  const layoutLabels = {
    "sitetitle": "Blue Sky Innovations VR",
    "sitelogo":"",
    "navs": [
    {
      "name": "Home",
      "link": "/",
      "element": "Home",
      "greeting": "Welcome",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?"
    },
    {
      "name": "Shackleton",
      "link": "/shackleton",
      "element": "Shackleton",
      "subtitle": "A Leadership Experience",
      "img": "",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?"
    },
    {
      "name": "Campaign Finance",
      "link": "/campaign-finance",
      "element": "Finance",
      "subtitle": "Lorem ipsum dolor sit amet ",
      "img": "",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?"
    },
    {
      "name": "Amazon Rainforest",
      "link": "/amazon-rainforest",
      "element": "Rainforest",
      "subtitle": "Lorem ipsum dolor sit amet ",
      "img": "",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?"
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
        element={<Finance prjs={layoutLabels.navs} />}/>
      <Route
        path={layoutLabels.navs[3].link}
        element={<Rainforest prjs={layoutLabels.navs} />}/>
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
  console.log(labels)
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
