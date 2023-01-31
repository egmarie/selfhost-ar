

import React, { useEffect } from "react"

export function Rainforest(props) {
  useEffect(() => {
    document.title = "Amazon Rainforest"
  }, [])
//let thisPage = props.prjs
const pageArray = props.prjs.filter(p => p.name === "Amazon Rainforest");
const page = pageArray[0]
console.log(page.name) 
  return (
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
  )
}

// export {Rainforest}