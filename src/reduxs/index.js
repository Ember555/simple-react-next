import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { apiUrl } from '../config/endpoint'
import { getJson, postJson, postFile } from '../common/request'
import rootReducer from './reducer'
import rootEpic from './epic'
import { handle as handleError } from '../common/errorHandler'

export default () => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      //
      url: apiUrl,
      getJson,
      postJson,
      postFile,
      handleError,
    },
  })

  const composeEnhancers =
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  )

  epicMiddleware.run(rootEpic)

  return store
}
