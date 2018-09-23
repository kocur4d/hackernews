import React from 'react'
import { shallow } from 'enzyme'

import Comments from './Component.js'

it('renders comments', () => {
  const props = {
    comments: [
      {id: 123, name: 'bob'},
      {id: 789, name: 'builder'},
    ]
  }

  const wrapper = shallow(<Comments {...props}/>)

  expect(wrapper.find('Comment')).toHaveLength(2)
  expect(wrapper.find('Comment').first().props()).toEqual({id: 123, name: 'bob', odd: true})
  expect(wrapper.find('Comment').last().props()).toEqual({id: 789, name: 'builder', odd: true})
})
