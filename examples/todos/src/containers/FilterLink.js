import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickProp: () => dispatch(setVisibilityFilter(ownProps.filter)),
  onHover:()=>{console.info('onHover')}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
