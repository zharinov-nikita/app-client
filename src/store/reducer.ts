import { createSlice } from "@reduxjs/toolkit"
import { IApp, IMessage } from "../models/app"



const initialState: IApp = {
    isLoad: false,
    isError: false,
    message: {
        is: false,
        id: 0,
        level: 'success',
        content: ''
    }
}


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // LOAD
        startLoad(state: IApp) { state.isLoad = true },
        finshLoad(state: IApp) { state.isLoad = false },
        // LOAD

        // ERROR
        showError(state: IApp) { state.isError = true },
        hideError(state: IApp) { state.isError = false },
        // ERROR

        // MESSAGE
        showMessage(state: IApp, action: { payload: IMessage }) {
            state.message = { is: true, ...action.payload }
        },
        hideMessage(state: IApp) {
            state.message = initialState.message
        }
        // MESSAGE
    }
})


export default appSlice.reducer