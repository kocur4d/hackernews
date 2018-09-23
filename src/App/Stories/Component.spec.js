import React from 'react'
import { shallow } from 'enzyme'

import Stories from './Component.js'

it('renders comments', () => {
  const props = {
    stories: [
      {id: 123, first: 'first'},
      {id: 789, second: 'second'},
    ]
  }

  const wrapper = shallow(<Stories {...props}/>)

  expect(wrapper.find('Story')).toHaveLength(2)
  expect(wrapper.find('Story').first().props()).toEqual({id: 123, first: 'first'})
  expect(wrapper.find('Story').last().props()).toEqual({id: 789, second: 'second'})
})
