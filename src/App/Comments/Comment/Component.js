import React from 'react'

import Body from './Body'
import Wrapper from './Wrapper'
import Header from './Header'
import Comments from '../index.js'

const Comment = ({
  id,
  by,
  time,
  text,
  kids = [],
  odd,
}) => (
  <Wrapper odd={odd}>
    <Header by={by} time={time}/>
    <Body>{text}</Body>
    {
      kids.length > 0 && <Comments id={id} fetchOnLoad='true' odd={!odd}/>
    }
  </Wrapper>
)

export default Comment
