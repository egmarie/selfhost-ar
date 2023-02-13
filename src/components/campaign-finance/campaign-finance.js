import React, { useEffect } from "react"
import { Outlet, Routes, Route, Link, useNavigate } from "react-router-dom"
// const React = require('react')
// const { Outlet, Routes, Route, Link } = require("react-router-dom")
import {Bars, Map, SphereKeys, Sphere} from "./campaign_sub"

export function Finance(props) {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Campaign Finance"
    navigate("/campaign-finance/bars");
  }, [])
  const pageArray = props.prjs.filter(p => p.name === "Campaign Finance");
  const page = pageArray[0]
  const children = page.children

  return (
    <>
    <div>
      <h2 className="display-5">{page.name}</h2>
      <p className="lead">
        {page.subtitle}
      </p>
      <div className="row">
        <div className="col-sm">
          <p>{page.description}</p>
        </div>
      </div>
    </div>
    <MenuFinance children={children} />
    <Routes>
            <Route
                path={children[0].link}
                element={<Bars page={children[0]} />} />
            <Route
                path={children[1].link}
                element={<Map page={children[1]} />} />
            <Route
                path={children[2].link}
                element={<SphereKeys page={children[2]} />} />
            <Route
                path={children[3].link}
                element={<Sphere page={children[3]} />} />
      </Routes>
        </>


  )
}

// export {Finance}
function MenuFinance(props) {
  let children = props.children

  return (

<header className="bg-light pt-3">
<div className="container">
  <ul className="nav nav-tabs">
  {children.map((child) => 
          <li className="nav-item" key={child.name}>
          <Link className="text-muted nav-link" activeclassname="active" to={`${child.link}`}>
            {child.name}
          </Link>
          </li>
      )}
  </ul>
</div>
</header>
  )
}