import React from 'react'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'

import App from './src/index'
import rootReducer from './src/rootReducer'

const middleware = [thunk]
const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer)

function AppWithRedux() {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

export default AppWithRedux
