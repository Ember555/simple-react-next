import { combineReducers } from 'redux'

import socket from './socket/reducer'
import testPage from './testPage/reducer'

export default combineReducers({
    socket,
    testPage,
})
