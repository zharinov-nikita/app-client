import { createReducer } from '@reduxjs/toolkit'
import { appShowMessage, appHideMessage } from './actions'
import initialState from './initialState'



export default createReducer(initialState, {
    [appShowMessage]: (state, action) => {
        state.message = { isMessage: true, ...action.payload }
    },
    [appHideMessage]: (state, action) => {
        state.message = initialState.message
    }
})

