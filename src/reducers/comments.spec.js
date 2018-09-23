import Immutable from 'immutable'

import reducer from './comments.js'

it('have initial state', () => {
  const state = undefined
  const action = {type: 'OTHER_ACTION'}
  const expected = {}

  expect(reducer(state, action).toJS()).toEqual(expected)
})

it('updates existing state in response to COMMENTS_LOAD_SUCCESS action', () => {
  const state = Immutable.fromJS({890: [7, 6, 5]})
  const action = {type: 'COMMENTS_LOAD_SUCCESS', id: 123, values: [4,5,6]}
  const expected = {890: [7, 6, 5], 123: [4, 5, 6]}

  expect(reducer(state, action).toJS()).toEqual(expected)
})
