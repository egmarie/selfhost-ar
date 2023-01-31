import React from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"


function Bars(props) {
    let page = props.page
    console.log(props)
        return(
          <>
          <h5>{page.name}</h5>
          
          </>
        )
  }
  function Map(props) {
    let page = props.page
    console.log(props)
        return(
          <>
          <h5>{page.name}</h5>
          
          </>
        )
  }
  function SphereKeys(props) {
    let page = props.page
    console.log(props)
        return(
          <>
          <h5>{page.name}</h5>
          
          </>
        )
  }
  function Sphere(props) {
    let page = props.page
    console.log(props)
        return(
          <>
          <h5>{page.name}</h5>
          
          </>
        )
  }

  export {Bars, Map, SphereKeys, Sphere}

  