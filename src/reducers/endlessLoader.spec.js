import Immutable from 'immutable'

import reducer from './endlessLoader.js'

it('have initial state', () => {
  const state = undefined
  const action = {type: 'OTHER_ACTION'}
  const expected = {
    'topstories': {
      isFetching: false,
    },
    'newstories': {
      isFetching: false,
    },
    'beststories': {
      isFetching: false,
    },
  }

  expect(reducer(state, action).toJS()).toEqual(expected)
})

it('updates existing state in response to DATA_LOAD_STARTED action', () => {
  const state = Immutable.fromJS({'topstories': {'isFetching': false}})
  const action = {type: 'DATA_LOAD_STARTED', key: 'topstories'}
  const expected = {'topstories': {'isFetching': true}}

  expect(reducer(state, action).toJS()).toEqual(expected)
})

it('updates existing state in response to DATA_LOAD_SUCCESS action', () => {
  const state = Immutable.fromJS({'topstories': {'isFetching': true}})
  const action = {type: 'DATA_LOAD_SUCCESS', key: 'topstories'}
  const expected = {'topstories': {'isFetching': false}}

  expect(reducer(state, action).toJS()).toEqual(expected)
})
