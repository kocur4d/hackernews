import React from 'react'

import Comment from './Comment'

const Comments = ({
  comments,
}) => (
  <div>
    {
      comments.map(comment => <Comment key={comment.id} {...comment}/>)
    }
  </div>
)

export default Comments
