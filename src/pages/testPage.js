import React, { Component } from "react"
import { connect } from "react-redux"
import { Form, Input, Button, Icon } from "antd"
import router from "next/router"

import { testPage } from "../config/routes"
import Layout from "../layout"
import { submittestPage, submitCancel } from "../reduxs/testPage/action"

const FormItem = Form.Item

class TestPage extends Component {
  state = { loading: false, alert: false }

  componentWillReceiveProps(nextProps) {
    // const { loading, alert } = nextProps
    // this.setState({ loading })
    // this.setState({ alert })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {
      dispatch,
      form: { validateFields, getFieldsValue },
    } = this.props
    return validateFields(error => {
      if (error) {
        return false
      }
      const { filename } = getFieldsValue()
      return dispatch(
        submittestPage({
          filename,
        }),
      )
    })
  }

  render() {
    const {
      dispatch,
      form: { getFieldDecorator },
      //
      url,
      networkId,
      _key,
      secret,
      //
      loading
    } = this.props

    return (
      <Layout currentPage="testPage" route={testPage}>
        <Form className="w-full justify-center" onSubmit={this.handleSubmit}>
          <div className="flex flex-col rounded border border-grey p-2 mt-4 mb-4 bg-white">
            <p className="font-bold text-lg text-blue text-start border-b pb-2">
              {testPage.title}
            </p>
            <p className="flex w-full justify-center text-medium m-4 px-8">
              {testPage.desc}
            </p>

            <div className="md:flex md:items-center mb-6 pr-6">
              <div className="md:w-1/5 mb-6">
                <label
                  className="block text-grey-dark font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="key"
                >
                  File Name
                </label>
              </div>

              <div className="md:w-4/5">
                <FormItem>
                  {getFieldDecorator("filename", {
                    rules: [
                      {
                        required: true,
                        message: "Please input filename!"
                      }
                    ]
                  })(
                    <Input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="filename"
                      prefix={loading && <Icon type="loading" />}
                      disabled={loading}
                    />
                  )}
                </FormItem>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button
                className="login-form-button"
                disabled={loading}
                onClick={() =>
                  router.push({
                    pathname: "/"
                  })
                }
              >
                <Icon type="left" theme="outlined" />
                Back
              </Button>

              {!loading && (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="ml-2 login-form-button"
                >
                  Submit
                  <Icon type="right" theme="outlined" />
                </Button>
              )}
            </div>
          </div>
        </Form>
      </Layout>
    )
  }
}

export default connect(
  state => state.testPage,
  dispatch => ({ dispatch })
)(Form.create()(TestPage))
