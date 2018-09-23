import Immutable from 'immutable'

import reducer from './stories.js'

it('have initial state', () => {
  const state = undefined
  const action = {type: 'OTHER_ACTION'}
  const expected = {
    'topstories': {
      isFetching: true,
      data: [],
      currentPage: 0,
      perPage: 10,
    },
    'newstories': {
      isFetching: true,
      data: [],
      currentPage: 0,
      perPage: 10,
    },
    'beststories': {
      isFetching: true,
      data: [],
      currentPage: 0,
      perPage: 10,
    },
  }

  expect(reducer(state, action).toJS()).toEqual(expected)
})

it('updates existing state in response to DATA_LOAD_SUCCESS action', () => {
  const state = Immutable.fromJS({
    'topstories': {
      isFetching: true,
      data: [],
      currentPage: 0,
      perPage: 10,
    },
  })
  const action = {type: 'DATA_LOAD_SUCCESS', key: 'topstories', values: [4,5,6]}
  const expected = {
    'topstories': {
      isFetching: false,
      data: [4, 5,6],
      currentPage: 1,
      perPage: 10,
    },
  }

  expect(reducer(state, action).toJS()).toEqual(expected)
})
