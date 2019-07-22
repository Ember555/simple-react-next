import { combineEpics } from 'redux-observable'

import { connectEpic } from './socket/epic'
import { testPageEpic } from './testPage/epic'
import { flameGraphEpic } from './flameGraph/epic'

export default combineEpics(
    connectEpic,
    testPageEpic,
    flameGraphEpic,
)
