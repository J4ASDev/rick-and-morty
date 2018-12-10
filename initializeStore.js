// Redux
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

// State
import initialState from './initialState'

// Middlewares
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export function initializeStore () {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        logger
      )
    )
  )
}
