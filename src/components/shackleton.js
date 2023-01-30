import React, { useEffect } from "react"

export function Shackleton() {
  useEffect(() => {
    document.title = "Shackleton | A Leadership Experience"
  }, [])

  return (
    <>
    <div>
      <h2 className="display-4">Learn More About Us</h2>
      <p className="lead">
        This is the <strong>about page</strong>. Dolor sit amet consectetur adipisicing elit. Itaque quasi natus fugit ab laudantium dolores, dicta blanditiis sit eum perferendis minima sunt repudiandae voluptates tempore. Fuga dicta ipsa beatae vel?
      </p>
      <div className="row">
        <div className="col-sm">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?</p>
        </div>
        <div className="col-sm">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?</p>
        </div>
      </div>
    </div>
    </>
  )
}

//export {Shackleton}