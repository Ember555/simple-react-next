import { Component } from 'react'
import { connect } from 'react-redux'

import { connect as connectSocket, opened } from '../reduxs/socket/action'
import { onReceived } from '../common/socket'

class SocketProvider extends Component {
  componentDidMount() {
    const { socket } = this.props
    const { status } = socket
    const { dispatch } = this.props

    if (!status) {
      dispatch(connectSocket())
    }
  }

  componentWillReceiveProps(nextProps) {
    const { socket } = nextProps
    const { status } = socket
    const { dispatch } = this.props

    if (status === 'connected') {
      onReceived(dispatch)
      dispatch(opened())
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}

export default connect(
  state => state,
  dispatch => ({ dispatch }),
)(SocketProvider)
