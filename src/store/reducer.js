import { createReducer } from '@reduxjs/toolkit'
import {
    appShowMessage,
    appHideMessage,

    appStartLoad,
    appFinishLoad,

    appShowError,
    appHideError,
} from './actions'
import initialState from './initialState'



export default createReducer(initialState, {
    [appShowMessage]: (state, action) => {
        state.message = { isMessage: true, ...action.payload }
    },
    [appHideMessage]: (state, action) => {
        state.message = initialState.message
    },

    [appStartLoad]: (state, action) => {
        state.isLoad = true
    },
    [appFinishLoad]: (state, action) => {
        state.isLoad = false
    },

    [appShowError]: (state, action) => {
        state.isError = true
    },
    [appHideError]: (state, action) => {
        state.isError = false
    },
})

