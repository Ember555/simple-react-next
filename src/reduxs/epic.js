import { combineEpics } from 'redux-observable'

import { connectEpic } from './socket/epic'
import { testPageEpic } from './testPage/epic'

export default combineEpics(
    connectEpic,
    testPageEpic,
)
