import React, { useState, useEffect, useReducer } from "react"
import { connect } from "react-redux"
import { Form, Input, Button, Icon } from "antd"
import axios from "axios"

import router from "next/router"

import { hookPage } from "../config/routes"
import Layout from "../layout"

import { fetch_cat_pending, fetch_cat_success } from "../reduxs/hookPage/action"
import reducer from "../reduxs/hookPage/reducer"

const Hookpage = () => {
  const [{ cat, isFetching }, dispatch] = useReducer(reducer, {
    isFetching: false,
    cat: {}
  })

  const randomCat = () => axios.get("https://aws.random.cat/meow")

  useEffect(() => {
    if (isFetching) {
      randomCat().then(response => {
        dispatch(fetch_cat_success(response.data))
      })
    }
  }, [isFetching])

  return (
    <Layout currentPage="hookPage" route={hookPage}>
      <div>
        <p>
          {isFetching ? (
            "Loading...."
          ) : (
            <img src={cat.file} alt="Cat" width="256" />
          )}
        </p>
        <p>
          <Button
            className="login-form-button"
            type="primary"
            onClick={() => dispatch(fetch_cat_pending())}
          >
            Click me
          </Button>
        </p>
      </div>
    </Layout>
  )
}

export default Hookpage
