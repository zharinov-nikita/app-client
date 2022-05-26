import { createAction } from '@reduxjs/toolkit'
import { APP_SHOW_MESSAGE, APP_HIDE_MESSAGE } from './types'

export const appShowMessage = createAction(APP_SHOW_MESSAGE)
export const appHideMessage = createAction(APP_HIDE_MESSAGE)