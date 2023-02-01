import React from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"



function Deforestation(props) {
  let page = props.page
    return(
      <>
      <div className="subpage-container">
          <h5>{page.name}</h5>
          <a className="ar" rel="ar" href="https://localhost:8080/assets/amazon-quicklook/usdz/lumberyard.usdz">hello</a>
          <div id="three1_container" className=""></div>
      </div>
      </>
    )
  }
  function Lumberyard(props) {
    let page = props.page

        return(
          <>
      <div className="subpage-container">
          <h5>{page.name}</h5>
          <div id="three2_container" className=""></div>
      </div>
          
          </>
        )
  }
  function Slaughterhouse(props) {
    let page = props.page

        return(
          <>
      <div className="subpage-container">
          <h5>{page.name}</h5>
          <div id="three3_container" className=""></div>
      </div>
          
          </>
        )
  }
  function Soyfarm(props) {
    let page = props.page

        return(
          <>
      <div className="subpage-container">
          <h5>{page.name}</h5>
          <div id="three4_container" className=""></div>
      </div>
          
          </>
        )
  }
  function Tribe(props) {
    let page = props.page

        return(
          <>
      <div className="subpage-container">
          <h5>{page.name}</h5>
          <div id="three5_container" className=""></div>
      </div>
          
          </>
        )
  }

  export {Tribe, Soyfarm, Slaughterhouse, Lumberyard, Deforestation}

  