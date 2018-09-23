import React from 'react'
import { Route } from 'react-router-dom'

import Stories from './Stories'
import Navigation from './Navigation'
import Comments from './Comments'
import Main from './Main'

const App = () => (
  <div>
    <Navigation />
    <Main>
      <Route path='/' exact render={ () => <Stories name='topstories' fetchOnLoad={true}/> }/>
      <Route path='/newstories' exact render={ () => <Stories name='newstories' fetchOnLoad={true}/> }/>
      <Route path='/beststories' exact render={ () => <Stories name='beststories' fetchOnLoad={true}/> }/>
      <Route path='/comment/:id' render={ ({match}) => <Comments id={match.params.id} fetchOnLoad={true}/> }/>
    </Main>
  </div>
)

export default App
