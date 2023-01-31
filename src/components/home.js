import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"
 function Home(props) {
    // console.log(props.prjs.map((p) => p.name))
    let prjs = props.prjs
    // console.log(prjs)

    //remove home to only show project pages
    const prjs2 = props.prjs.filter(p => p.name != "Home");
    const pageArray = props.prjs.filter(p => p.name === "Home");
    const page = pageArray[0]
    useEffect(() => {
      document.title = "Blue Sky VR"
    }, [])
    
    // var result = str.slice(1);

    return (
      <>
      <h2 className="display-5">{page.greeting}</h2>
      <div className="row">
        <div className="col-sm">
          <p>{page.description}</p>
        </div>
      </div>
    <ul className="d-flex flex-wrap">
       {prjs2.map((proj) => 
        <li key={proj.link.slice(1)} id={proj.link.slice(1)} className="port-container shadow-sm m-2 p-2"><Link to={proj.link}>
            <div className="img-container bg-light">
              <img className="port-img" src={proj.img} />
            </div>
            <h3>{proj.name}</h3>
            <h4>{proj.subtitle}</h4>

        </Link></li>
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

