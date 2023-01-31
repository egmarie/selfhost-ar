import React from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"


function Bars(props) {
    let page = props.page

        return(
          <>
      <div className="subpage-container">
          <h5>{page.name}</h5>
          <a className="ar" rel="ar" href="/assets/campaign-finance-datavis/ar/map.reality">hello</a>
      </div>


          
          </>
        )
  }
  function Map(props) {
    let page = props.page

        return(
          <>
       <div className="subpage-container">
          <h5>{page.name}</h5>
      </div>
          
          </>
        )
  }
  function SphereKeys(props) {
    let page = props.page

        return(
          <>
      <div className="subpage-container">
          <h5>{page.name}</h5>
      </div>
          
          </>
        )
  }
  function Sphere(props) {
    let page = props.page

        return(
          <>
      <div className="subpage-container">
          <h5>{page.name}</h5>
          <h5>{page.description}</h5>
      </div>
          
          </>
        )
  }

  export {Bars, Map, SphereKeys, Sphere}

  