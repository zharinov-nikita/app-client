import { createAction } from '@reduxjs/toolkit'
import {
    APP_SHOW_MESSAGE,
    APP_HIDE_MESSAGE,

    APP_START_LOAD,
    APP_FINISH_LOAD,

    APP_SHOW_ERROR,
    APP_HIDE_ERROR,
} from './types'

export const appShowMessage = createAction(APP_SHOW_MESSAGE)
export const appHideMessage = createAction(APP_HIDE_MESSAGE)

export const appStartLoad = createAction(APP_START_LOAD)
export const appFinishLoad = createAction(APP_FINISH_LOAD)

export const appShowError = createAction(APP_SHOW_ERROR)
export const appHideError = createAction(APP_HIDE_ERROR)