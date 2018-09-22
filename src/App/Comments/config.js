import axios from 'axios'

const HACKER_NEWS_API_URL = 'https://hacker-news.firebaseio.com/v0/' 

const URI = (id) => HACKER_NEWS_API_URL + 'item/' + id + '.json'

const responseHandler = (id) => (dispatch) => (oprions) => (response) => {
  const commentsIDs = response.data.kids
  const comments = commentsIDs.map(id => axios.get(URI(id)))
  dispatch({type: 'COMMENTS_LOAD_STARTED'})
  Promise.all(comments)
    .then(values => dispatch({
      type: 'COMMENTS_LOAD_SUCCESS',
      id,
      values: values.map(value => value.data),
    }))
}

export default (id) => ({
  api: URI(id),
  responseHandler: responseHandler(id),
})
