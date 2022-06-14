import { combineReducers, configureStore } from "@reduxjs/toolkit"

import appReducer from '.'
import linkReducer from '../../modules/link/store'
import { linkApi } from "../../modules/link/services"


const rootReducer = combineReducers({
    app: appReducer,
    link: linkReducer,
    [linkApi.reducerPath]: linkApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(linkApi.middleware)
    })
}


export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
