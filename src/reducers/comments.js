import Immutable from 'immutable'

const initialState = Immutable.Map()

export default (state = initialState, action) => {
  switch(action.type) {
    case 'COMMENTS_LOAD_STARTED':
      return initialState
    case 'COMMENTS_LOAD_SUCCESS':
      return Immutable.fromJS({
        [action.id]: action.values
      })
    default:
      return state
  }
}

