import {connect} from 'react-redux'

import withFetch from '../withFetch' 
import Stories from './Component.js'
import config from './config.js'

const mapStateToProps = (state, {name}) => ({
  isFetching: state.getIn(['stories', name, 'isFetching']),
  currentPage: state.getIn(['stories', name, 'currentPage']),
  perPage: state.getIn(['stories', name, 'perPage']),
  stories: state.getIn(['stories', name, 'data']).toJS(),
  api: config[name].api
})

const mapDispatchToProps = (dispatch, {name}) => ({
  responseHandler: config[name].responseHandler(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withFetch(Stories))
