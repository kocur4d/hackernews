import React from 'react'

import Story from './Story'
import EndlessLoader from './EndlessLoader'

const Stories = ({
  name,
  stories,
}) => (
  <div>
    {
      stories.map(story => <Story key={story.id} {...story}/>)
    }
    <EndlessLoader name={name} fetchOnClick={true}/>
  </div>
)

export default Stories
