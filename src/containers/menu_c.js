import { connect } from 'react-redux'
import { setPage } from '../actions/index_a.js'
import Menu from '../menu.js'

// const mapStateToProps = state => ({
//   page: state
// })

const mapDispatchToProps = dispatch => ({
    onMenuChange: page => dispatch(setPage(page))
})

export default connect(
    null,
    mapDispatchToProps
)(Menu)
