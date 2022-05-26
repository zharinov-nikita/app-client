import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './reducer'
import linkReducer from '../microservices/link/store/reducer'


const reducer = combineReducers({
    app: appReducer,
    link: linkReducer
})

export const store = configureStore({
    reducer
})
