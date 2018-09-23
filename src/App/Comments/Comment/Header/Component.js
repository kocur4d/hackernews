import React from 'react'

import Wrapper from './Wrapper'
import Author from './Author'
import Time from './Time'

const Header = ({
  by,
  time,
  text,
}) => (
  <Wrapper>
    <Author>{by || 'deleted'}</Author>
    <Time>{(new Date(time * 1000)).toLocaleDateString("en-UK")}</Time>
  </Wrapper>
)

export default Header
