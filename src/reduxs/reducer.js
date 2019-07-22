import { combineReducers } from 'redux'

import socket from './socket/reducer'
import testPage from './testPage/reducer'
import flameGraph from './flameGraph/reducer'

export default combineReducers({
    socket,
    testPage,
    flameGraph,
})
