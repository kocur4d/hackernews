import {connect} from 'react-redux'
import Immutable from 'immutable'

import withFetch from '../withFetch' 
import Comments from './Component'
import config from './config.js'

const mapStateToProps = (state, {id}) => ({
  comments: state.getIn(['comments', id], Immutable.List()).toJS(),
  api: config(id).api
})

const mapDispatchToProps = (dispatch, {id}) => ({
  responseHandler: config(id).responseHandler(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withFetch(Comments))
