import React from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"


function Deforestation(props) {
  let page = props.page
console.log(props)
    return(
      <>
      <h5>{page.name}</h5>
      
      </>
    )
  }
  function Lumberyard(props) {
    let page = props.page
    console.log(props)
        return(
          <>
          <h5>{page.name}</h5>
          
          </>
        )
  }
  function Slaughterhouse(props) {
    let page = props.page
    console.log(props)
        return(
          <>
          <h5>{page.name}</h5>
          
          </>
        )
  }
  function Soyfarm(props) {
    let page = props.page
    console.log(props)
        return(
          <>
          <h5>{page.name}</h5>
          
          </>
        )
  }
  function Tribe(props) {
    let page = props.page
    console.log(props)
        return(
          <>
          <h5>{page.name}</h5>
          
          </>
        )
  }

  export {Tribe, Soyfarm, Slaughterhouse, Lumberyard, Deforestation}

  