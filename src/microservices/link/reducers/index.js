const defaultState = {
    message: null,
    isLoad: false,
    isError: false,
    drawer: {
        visible: false,
        form: { offer: '', model: '', title: '', description: '', url: '', short: '' }
    },
    links: []
}

export const linkReducer = (state = defaultState, action) => {
    switch (action.type) {

        //
        case 'link/SHOW_DRAWER':
            return { ...state, drawer: { ...state.drawer, visible: !state.drawer.visible } }
        case 'link/HIDE_DRAWER':
            return { ...state, drawer: { ...state.drawer, visible: !state.drawer.visible } }


        //
        case 'link/START_LOAD':
            return { ...state, isLoad: !state.isLoad }
        case 'link/FINISH_LOAD':
            return { ...state, isLoad: !state.isLoad }


        //
        case 'link/SHOW_ERROR':
            return { ...state, isError: true }
        case 'link/HIDE_ERROR':
            return { ...state, isError: false }
        case 'link/SHOW_MESSAGE':
            return { ...state, message: action.payload }


        //
        case 'link/GET_LINKS':
            return { ...state, links: [...state.links, ...action.payload] }
        case 'link/DELETE_LINK':
            return { ...state, links: state.links.filter(link => link._id !== action.payload) }
        case 'link/CREATE_LINK':
            return { ...state, links: [...state.links, action.payload] }



        //
        case 'link/SET_FORM':
            return {
                ...state, drawer: {
                    ...state.drawer, form: { ...state.drawer.form, ...action }
                }
            }
        case 'link/CLEAR_FORM':
            return {
                ...state, drawer: {
                    ...state.drawer, form: { ...defaultState.drawer.form }
                }
            }
        default:
            return state
    }
}


export const startLoad = () => ({ type: 'link/START_LOAD' })
export const finishLoad = () => ({ type: 'link/FINISH_LOAD' })

export const showDrawer = () => ({ type: 'link/SHOW_DRAWER' })
export const hideDrawer = () => ({ type: 'link/HIDE_DRAWER' })

export const showError = () => ({ type: 'link/SHOW_ERROR' })
export const hideError = () => ({ type: 'link/HIDE_ERROR' })

export const showMessage = (payload) => ({ type: 'link/SHOW_MESSAGE', payload })

export const getLinks = (payload) => ({ type: 'link/GET_LINKS', payload })
export const createLink = (payload) => ({ type: 'link/CREATE_LINK', payload })
export const deleteLink = (payload) => ({ type: 'link/DELETE_LINK', payload })

export const clearForm = () => ({ type: 'link/CLEAR_FORM' })

