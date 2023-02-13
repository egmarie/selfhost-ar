import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"


function Deforestation(props) {
      return(
        <>
          <Template props={props.page} />
        </>
      )
}

  function Lumberyard(props) {
    let page = props.page

        return(
          <>
            <Template props={props.page} />
          </>
        )
  }
  function Slaughterhouse(props) {
    let page = props.page

        return(
          <>
            <Template props={props.page} />
          </>
        )
  }
  function Soyfarm(props) {
    let page = props.page

        return(
          <>
            <Template props={props.page} />
          </>
        )
  }
  function Tribe(props) {
    let page = props.page

        return(
          <>
            <Template props={props.page} />
          </>
        )
  }

  function Template(props) {
    // loadThree()
    const BASE = 'https://blue-sky-ar-assets1222.s3.amazonaws.com'
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

  export {Tribe, Soyfarm, Slaughterhouse, Lumberyard, Deforestation}

  