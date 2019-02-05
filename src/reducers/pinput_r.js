const files = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_FILES':
            return action.files
        default:
            return state
    }
}

export default files