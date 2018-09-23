import Immutable from 'immutable'

const initialState = Immutable.Map()

export default (state = initialState, action) => {
  switch(action.type) {
    case 'COMMENTS_LOAD_SUCCESS':
      return state
        .updateIn([action.id], () => Immutable.fromJS(action.values))
    default:
      return state
  }
}

