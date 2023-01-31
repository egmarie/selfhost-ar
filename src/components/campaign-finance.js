import React, { useEffect } from "react"

export function Finance(props) {
  useEffect(() => {
    document.title = "Campaign Finance"
  }, [])
  const pageArray = props.prjs.filter(p => p.name === "Campaign Finance");
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

// export {Finance}