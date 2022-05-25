import {
    APP_SHOW_MESSAGE,
    APP_HIDE_MESSAGE,
} from './types'

// => ERROR
export const appShowMessage = (payload) => ({ type: APP_SHOW_MESSAGE, payload })
export const appHideMessage = () => ({ type: APP_HIDE_MESSAGE })
// => ERROR
