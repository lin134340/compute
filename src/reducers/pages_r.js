const pages = (state = '', action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return action.page
        default:
            return state
    }
}

export default pages