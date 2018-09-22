import React from 'react'

import Body from './Body'
import Wrapper from './Wrapper'
import Header from './Header'

const Comment = ({
  by,
  time,
  text,
}) => (
  <Wrapper>
    <Header by={by} time={time}/>
    <Body>{text}</Body>
  </Wrapper>
)

export default Comment
