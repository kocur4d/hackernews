import React from 'react'

import NavigationLink from './NavigationLink'
import Wrapper from './Wrapper'
import Header from './Header'

const App = () => (
  <Wrapper>
    <Header>Artificial News</Header>
    <NavigationLink to='/'>Top Stories</NavigationLink>
    <NavigationLink to='/newstories'>New Stories</NavigationLink>
    <NavigationLink to='/beststories'>Best Stories</NavigationLink>
  </Wrapper>
)

export default App
