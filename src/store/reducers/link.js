const defaultState = {
    isLoad: false,
    isError: false,
    drawer: { visible: false },
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
            return { ...state, isError: !state.isError }
        case 'link/GET_LINKS':
            return { ...state, links: [...state.links, ...action.payload] }
        // 
        default:
            return state
    }
}


export const startLoad = () => ({ type: 'link/START_LOAD' })
export const finishLoad = () => ({ type: 'link/FINISH_LOAD' })

export const showError = () => ({ type: 'link/SHOW_ERROR' })

export const getLinks = (payload) => ({ type: 'link/GET_LINKS', payload })