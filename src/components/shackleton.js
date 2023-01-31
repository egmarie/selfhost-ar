import React, { useEffect } from "react"

export function Shackleton(props) {
  useEffect(() => {
    document.title = "Shackleton | A Leadership Experience"
  }, [])
  const pageArray = props.prjs.filter(p => p.name === "Shackleton");
  const page = pageArray[0]
  console.log(page.name)
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
    </>
  )
}

//export {Shackleton}