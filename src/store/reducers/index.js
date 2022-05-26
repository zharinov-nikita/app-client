import { createAction, createReducer } from '@reduxjs/toolkit'
import { APP_SHOW_MESSAGE, APP_HIDE_MESSAGE } from './types'

const defaultState = {
    message: {
        isMessage: false,
        typeMessage: '',
        contentMessage: ''
    }
}

export const appShowMessage = createAction(APP_SHOW_MESSAGE)
export const appHideMessage = createAction(APP_HIDE_MESSAGE)

export default createReducer(defaultState, {
    [appShowMessage]: (state, action) => {
        state.message = { isMessage: true, ...action.payload }
    },
    [appHideMessage]: (state, action) => {
        state.message = defaultState.message
    }
})

