import React from 'react'

import EndlessButton from './EndlessButton'

const EndlessLoader = ({
  onClick,
}) => (
  <div>
    <EndlessButton
      onClick={onClick}
    >Load more</EndlessButton>
  </div>
)

export default EndlessLoader
