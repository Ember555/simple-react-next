import React, { Component } from "react"
import { connect } from "react-redux"
import { Form, Input, Button, Icon } from "antd"
import router from "next/router"

import { flameGraph } from "../config/routes"
import Layout from "../layout"

import { submitflameGraph } from "../reduxs/flameGraph/action"

const FormItem = Form.Item

class FlameGraph extends Component {

  handleSubmit = e => {
    e.preventDefault()
    const { dispatch } = this.props
    return dispatch(submitflameGraph({}))
  }

  render() {
    const { data } = this.props
    return (
      <Layout currentPage="flameGraph" route={flameGraph}>
        <Form className="w-full justify-center" onSubmit={this.handleSubmit}>
          <Button
            type="primary"
            htmlType="submit"
            className="ml-2 login-form-button"
          >
            Submit
            <Icon type="right" theme="outlined" />
          </Button>
        </Form>
      </Layout>
    )
  }
}

export default connect(
  state => state.flameGraph,
  dispatch => ({ dispatch })
)(Form.create()(FlameGraph))
