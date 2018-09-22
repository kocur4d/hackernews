import Immutable from 'immutable'

const generateState = () =>  ['topstories', 'newstories', 'beststories'].reduce((acc, value) => {
  acc[value] = {
    isFetching: true,
    data: [],
    currentPage: 0,
    perPage: 2,
  }
  return acc
}, {})

const initialState = Immutable.fromJS(generateState())

export default (state = initialState, action) => {
  switch(action.type) {
    case 'DATA_LOAD_SUCCESS':
      return state
        .updateIn([action.key, 'data'], (data) => data.concat(Immutable.fromJS(action.values)))
        .updateIn([action.key, 'currentPage'], page => page + 1)
        .updateIn([action.key, 'isFetching'], () => false)
    default:
      return state
  }
}
