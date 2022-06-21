import { combineReducers, configureStore } from "@reduxjs/toolkit"

import appReducer from '.'
import offerReducer from '../../modules/offer/store'
import { offerApi } from "../../modules/offer/services"


const rootReducer = combineReducers({
    app: appReducer,
    offer: offerReducer,
    [offerApi.reducerPath]: offerApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(offerApi.middleware)
    })
}


export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
