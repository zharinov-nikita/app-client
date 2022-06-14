import { createSlice } from "@reduxjs/toolkit"
import { AppType } from "./types/app.type"
import { MessageType } from "./types/message.type"



const initialState: AppType = {
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
        startLoad(state: AppType) { state.isLoad = true },
        finshLoad(state: AppType) { state.isLoad = false },
        // LOAD

        // ERROR
        showError(state: AppType) { state.isError = true },
        hideError(state: AppType) { state.isError = false },
        // ERROR

        // MESSAGE
        showMessage(state: AppType, action: { payload: MessageType }) {
            state.message = { is: true, ...action.payload }
        },
        hideMessage(state: AppType) {
            state.message = initialState.message
        },
        // MESSAGE
    }
})


export default appSlice.reducer