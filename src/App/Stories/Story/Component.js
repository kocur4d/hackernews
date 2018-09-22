import React from 'react'

import Wrapper from './Wrapper'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'

const Story = ({
  id,
  title,
  url,
  kids = [],
}) => (
  <Wrapper>
    <ExternalLink href={url}>{title}</ExternalLink>
    <InternalLink to={`/comment/${id}`}>{kids.length} comments</InternalLink>
  </Wrapper>
)

export default Story
