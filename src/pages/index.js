import React from "react"
import Link from "next/link"
import { connect } from "react-redux"

import routes from "../config/routes"
import SocketProvider from "../provider/socket"

const Index = () => (
  <div className="bg-white">
    <div className="flex flex-col font-mono">
      {/* header */}
      <header className="sticky pin-x pin-t bg-black">
        <div className="flex justify-center">
          <p className="font-bold text-lg text-center text-grey-dark mt-2">
            Test Web
          </p>
        </div>
      </header>
      {/* header */}

      {/* section  */}
      <section className="flex justify-center">
        <div className="flex flex-col" style={{ maxWidth: 1024 }}>
          <div className="flex w-full justify-center mt-16">
            <Link href="/testPage">
              <a className="bg-blue hover:bg-blue-dark text-white font-bold py-4 px-4 rounded-full inline-flex items-center no-underline">
                Test Page
              </a>
            </Link>
          </div>
          <div className="flex w-full justify-center mt-16">
            <Link href="/hookPage">
              <a className="bg-blue hover:bg-blue-dark text-white font-bold py-4 px-4 rounded-full inline-flex items-center no-underline">
                Hook Page
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* section */}

      {/* footer */}
      <div className="fixed pin-x pin-b">
        <div className="flex justify-center">
          <div className="flex w-full bg-white" style={{ maxWidth: 1024 }}>
            {/* Footer */}
          </div>
        </div>
      </div>
      {/* footer */}
    </div>
  </div>
)

export default connect(
  state => state,
  dispatch => ({ dispatch })
)(Index)
