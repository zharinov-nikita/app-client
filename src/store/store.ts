import { combineReducers, configureStore } from "@reduxjs/toolkit"

import appReducer from './app'
import linkReducer from '../microservices/link/store/link'
import projectReducer from '../microservices/project/store/project'


const rootReducer = combineReducers({
    app: appReducer,
    link: linkReducer,
    project: projectReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
