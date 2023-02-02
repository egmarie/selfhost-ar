import React from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"
import deforest_ from '../../assets/amazon-quicklook/img/deforestation.jpg'
import lumber_ from '../../assets/amazon-quicklook/img/lumberyard.jpg'
import slaughter_ from '../../assets/amazon-quicklook/img/slaughterhouse.jpg'
import soyfarm_ from '../../assets/amazon-quicklook/img/soyfarm.jpg';
import tribe_ from '../../assets/amazon-quicklook/img/tribe.jpg';

// ### This code imports 3JS settings
//import {loadThree} from "./amz-3"           {/* <canvas id="three1_container" className="webgl bg-white"></canvas> */} 
// onClick={() => loadThree()}
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
  
    let page = props.props
      return(
        <>
        <div className="subpage-container bg-light" >
            <h5>{page.name}</h5>
            <a className="ar" rel="ar" href="https://localhost:8080/assets/amazon-quicklook/usdz/lumberyard.usdz">
              <div className="imgContainer">
                <img src={page.img} id="" className="posterImg" />
              </div>
            </a> 
        </div>
        </>
      )
    }

  export {Tribe, Soyfarm, Slaughterhouse, Lumberyard, Deforestation}

  