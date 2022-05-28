import { combineReducers, configureStore } from '@reduxjs/toolkit'

import appReducer from './reducer'
import linkReducer from '../microservices/link/store/reducer'
import businessReducer from '../microservices/business/store/reducer'

const reducer = combineReducers({
    app: appReducer,
    link: linkReducer,
    business: businessReducer,
})

export const store = configureStore({
    reducer
})
