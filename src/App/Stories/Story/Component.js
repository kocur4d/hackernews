import React from 'react'

import Wrapper from './Wrapper'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'
import NoKidsLabel from './NoKidsLabel'

const Story = ({
  id,
  title,
  url,
  kids = [],
}) => (
  <Wrapper>
    <ExternalLink href={url}>{title}</ExternalLink>
    {
      kids.length > 0
      ? <InternalLink to={`/comment/${id}`}>{kids.length} comments</InternalLink>
      : <NoKidsLabel>0 comments</NoKidsLabel>
    }
  </Wrapper>
)

export default Story
