import { combineReducers } from 'redux-immutable'

import storiesReducer from './reducers/stories.js'
import endlessLoaderReducer from './reducers/endlessLoader.js'
import commentsReducer from './reducers/comments.js'

export default combineReducers({
  stories: storiesReducer,
  endlessLoader: endlessLoaderReducer,
  comments: commentsReducer,
})
