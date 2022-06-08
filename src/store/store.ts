import { combineReducers, configureStore } from "@reduxjs/toolkit"

import appReducer from './app'
import linkReducer from '../microservices/link/store/link'
import processReducer from '../microservices/process/store/process'


const rootReducer = combineReducers({
    app: appReducer,
    link: linkReducer,
    process: processReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
