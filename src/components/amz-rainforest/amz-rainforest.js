import React, { useEffect } from "react"
import { Outlet, Routes, Route, Link, Switch} from "react-router-dom"
import {Tribe, Soyfarm, Slaughterhouse, Lumberyard, Deforestation} from "./amz_sub"
import {loadThree} from "./amz-3"

export function Rainforest(props) {
  useEffect(() => {
    document.title = "Amazon Rainforest"
  }, [])
//let thisPage = props.prjs
const pageArray = props.prjs.filter(p => p.name === "Amazon Rainforest");
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
    <MenuRainforest children={children} />

    <Routes>
            <Route
                path={children[0].link}
                element={<Deforestation page={children[0]} />} />
            <Route
                path={children[1].link}
                element={<Lumberyard page={children[1]} />} />
            <Route
                path={children[2].link}
                element={<Slaughterhouse page={children[2]} />} />
            <Route
                path={children[3].link}
                element={<Soyfarm page={children[3]} />} />
            <Route
                path={children[4].link}
                element={<Tribe page={children[4]} />} />
      </Routes>

    </>
  )
}

function MenuRainforest(props) {
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

// export {Rainforest}