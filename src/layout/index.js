import React from "react"
import { connect } from "react-redux"

const maxWidth = 1024

const Index = ({ route, children }) => {
  return (
    <div className="flex flex-col font-mono bg-grey-lightest">
      {/* header */}
      <header className="sticky pin-x pin-t bg-black">
        <div className="flex justify-center">
          <p className="font-bold text-lg text-center text-grey-dark mt-2">
            Test Page
          </p>
        </div>
      </header>
      {/* header */}

      <div className="flex justify-center">
        <div className="flex flex-col w-2/3 pl-2 pt-4 pb-2">{children}</div>
      </div>

      {/* footer */}
      {/* footer */}
    </div>
  )
}

export default connect(
  state => state,
  dispatch => ({ dispatch })
)(Index)
