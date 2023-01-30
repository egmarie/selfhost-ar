import React from "react"
import ReactDOM from "react-dom"
import { Outlet, Routes, Route, Link } from "react-router-dom"
 function Home(props) {
    console.log(props.prjs.map((p) => p.name))
    const prjs = props.prjs
    //to={proj.link}
    console.log(prjs)
    console.log
    return (
      <>
    <ul>
       {prjs.map((proj) => 
        <li><a>

            {/* <h3>{`${proj.name}`}</h3> */}
            <h4>{proj.subtitle}</h4>

        </a></li>
        )}
    </ul>

    </>
  )}
function NoMatch() {
    return (
      <>
      <h2>404 Error: Page not found.</h2>
      </>
    )
  }

  export {Home, NoMatch}

