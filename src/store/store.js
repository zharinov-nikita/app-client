import { combineReducers, configureStore } from '@reduxjs/toolkit'

import linkReducer from '../microservices/link/reducers'
import appReducer from './reducers'

const reducer = combineReducers({
    app: appReducer,
    link: linkReducer
})

export const store = configureStore({
    reducer
})
