import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"


  function Bars(props) {
    let page = props.page
        return(
          <>
            <Template props={props.page} />
          </>
        )
  }
  function Map(props) {
    let page = props.page
        return(
          <>
            <Template props={props.page} />
          </>
        )
  }
  function SphereKeys(props) {
    let page = props.page
        return(
          <>
            <Template props={props.page} />
          </>
        )
  }
  function Sphere(props) {
    let page = props.page
        return(
          <>
            <Template props={props.page} />
          </>
        )
  }

  function Template(props) {
    // loadThree()
    let page = props.props
      return(
        <>
        <div className="subpage-container bg-light" >
            <a className="ar" rel="ar" href={page.img}>
            <h5>{page.name}</h5>
              <div className="imgContainer">
                <img src={page.img} id="" className="posterImg" />
              </div>
            </a> 
        </div>
        </>
      )
    }

  export {Bars, Map, SphereKeys, Sphere}

  