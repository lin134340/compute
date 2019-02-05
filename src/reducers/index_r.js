import { combineReducers } from 'redux'
import pages from './pages_r.js'
import files from './pinput_r.js'

const reducer = combineReducers({
    pages,
    files
})

export default reducer

// const initialState = {
//     page: ""
// }

// export default (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_PAGE':
//             return Object.assign({}, state, {
//                 page: action.page
//             })
//             // return action.page
//         default:
//             return state
//     }
// }