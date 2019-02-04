export default (state = '导入', action) => {
    switch (action.type) {
      case 'SET_PAGE':
        return action.page
      default:
        return state
    }
  }
  