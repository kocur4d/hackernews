import React from 'react'

const Story = ({
  title
}) => (
  <div>
    <p>{title}</p>
  </div>
)

const Stories = ({
  stories
}) => (
  <div>
    {
      stories.map(story => <Story key={story.id} {...story}/>)
    }
  </div>
)

export default Stories
