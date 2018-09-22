import React from 'react'

import NavigationLink from './NavigationLink'

const App = () => (
  <div>
    <NavigationLink to='/'>Top Stories</NavigationLink>
    <NavigationLink to='/newstories'>New Stories</NavigationLink>
    <NavigationLink to='/beststories'>Best Stories</NavigationLink>
  </div>
)

export default App
