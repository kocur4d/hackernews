import React from 'react'
import { shallow } from 'enzyme'

import Comment from './Component.js'

it('renders comment with subcomments', () => {
  const props = {
    id: 123,
    by: 'John Galt',
    time: '1969',
    text: 'secret service',
    kids: [456, 678],
    odd: true
  }

  const wrapper = shallow(<Comment {...props}/>)

  expect(wrapper.find('Header').props()).toEqual({by: 'John Galt', time: '1969'})
})
