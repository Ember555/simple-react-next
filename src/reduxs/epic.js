import { combineEpics } from 'redux-observable'

import { testPageEpic } from './testPage/epic'

export default combineEpics(
    testPageEpic,
)
