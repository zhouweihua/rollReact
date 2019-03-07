import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducer'

export default function configureStore(initialState) {
  let middleware = applyMiddleware(thunk)

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware)
  }

  return createStore(rootReducer, initialState, middleware)
}
