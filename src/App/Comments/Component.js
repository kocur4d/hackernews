import React from 'react'

import Comment from './Comment'

const Comments = ({
  comments,
  odd = true,
}) => (
  <div>
    {
      comments.map(comment => <Comment key={comment.id} {...comment} odd={odd}/>)
    }
  </div>
)

export default Comments
