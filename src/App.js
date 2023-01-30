import React from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"
import { Shackleton } from "./components/shackleton"
import { Finance } from "./components/campaign-finance"
import { Rainforest } from "./components/amz-rainforest"
import { Home, NoMatch } from "./components/home"
export default function App() {
  let experiences = [
    {
      "name": "Shackleton VR",
      "subtitle": "A Leadership Experience",
      "img": "",
      "link": "/shackleton"
    },
    {
      "name": "Campaign Finance",
      "subtitle": "fff",
      "img": "",
      "link": "/campaign-finance"
    },
    {
      "name": "Amazon Rainforest",
      "subtitle": "aaa",
      "img": "",
      "link": "/amazon-rainforest"
    },
  ]
  
  return (
    <>
    {/* // <BrowserRouter> */}
      
    <HeaderLayout /> 

       <div className="container py-3 py-md-5 px-5">
    <Routes>
    <Route
      path="/"
      element={<Home prjs={experiences} 
      index/>}/>
      <Route
        path="/shackleton"
        element={<Shackleton />}/>
      <Route
        path="/campaign-finance"
        element={<Finance/>}/>
      <Route
        path="/amazon-rainforest"
        element={<Rainforest />}/>
      <Route
        path="*"
        element={<NoMatch />}/>
  </Routes>
      </div>
      
    <FooterLayout />
    {/* // </BrowserRouter> */}
    </>
  )
}

function HeaderLayout() {
  return (

<header className="bg-light pt-3">
<div className="container">
  <h1 className="display-1">Our Amazing App</h1>
  <ul className="nav nav-tabs">
  <li className="nav-item">
      <Link to="/" className="nav-link" activeclassname="active">
        Home 
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/shackleton" className="nav-link" activeclassname="active">
        Shackleton 
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/amazon-rainforest" className="nav-link" activeclassname="active"> 
        Amazon Rainforest
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/campaign-finance" className="nav-link" activeclassname="active">
        Campaign Finance
      </Link>
    </li>
  </ul>
</div>
</header>
  )
}

function FooterLayout() {
  return (
    <footer className="border-top pt-3">
    <p className="small text-center text-muted">
      <Link className="text-muted mr-1" to="/shackleton">
        Shackleton
      </Link>
      <Link className="text-muted ml-1" to="/campaign-finance">
        Campaign Finance
      </Link>
      <Link className="text-muted ml-1" to="/amazon-rainforest">
        Amazon Rainforest
      </Link>
    </p>
  </footer>
  )
}
