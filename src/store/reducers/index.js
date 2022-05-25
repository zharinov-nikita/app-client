import {
    APP_SHOW_MESSAGE,
    APP_HIDE_MESSAGE,
} from './types'

const defaultState = {
    message: {
        isMessage: false,
        typeMessage: '',
        contentMessage: ''
    }
}

export const appReducer = (state = defaultState, action) => {
    switch (action.type) {

        //=> MESSAGE
        case APP_SHOW_MESSAGE:
            return { ...state, message: { ...state.message, isMessage: true, ...action.payload } }
        case APP_HIDE_MESSAGE:
            return { ...state, message: { ...defaultState.message } }
        //=> MESSAGE


        default:
            return state
    }
}



