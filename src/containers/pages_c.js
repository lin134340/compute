import { connect } from 'react-redux'
// import { setPage } from '../actions/index_a.js'
import Pages from '../pages.js'

const mapStateToProps = state => ({
  page: state.pages
})

const mapDispatchToProps = dispatch => ({
  onFileChange: files => dispatch(changeFiles(files))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)
