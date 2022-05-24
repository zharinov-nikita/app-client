import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { linkReducer } from '../microservices/link/reducers'

const reducer = combineReducers({
    link: linkReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
