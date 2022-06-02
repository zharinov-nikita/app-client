import { combineReducers, configureStore } from "@reduxjs/toolkit"

import appReducer from './reducer'
import linkReducer from '../microservices/link/store'

const rootReducer = combineReducers({
    app: appReducer,
    link: linkReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
