import { createSlice } from "@reduxjs/toolkit"
import { StateType } from "./types/state.type"
import { MessageType } from "./types/message.type"



const initialState: StateType = {
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
        showMessage(state: StateType, action: { payload: MessageType }) {
            state.message = { is: true, ...action.payload }
        },
        hideMessage(state: StateType) {
            state.message = initialState.message
        },
    }
})


export default appSlice.reducer