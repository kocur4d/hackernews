import React from 'react'
import { Route } from 'react-router-dom'

import Stories from './Stories'
import Navigation from './Navigation'

const App = () => (
  <div>
    <Navigation />
    <Route path='/' exact render={ () => <Stories name='topstories' fetchOnLoad={true}/> }/>
    <Route path='/newstories' exact render={ () => <Stories name='newstories' fetchOnLoad={true}/> }/>
    <Route path='/beststories' exact render={ () => <Stories name='beststories' fetchOnLoad={true}/> }/>
  </div>
)

export default App
