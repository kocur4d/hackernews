import axios from 'axios'

const HACKER_NEWS_API_URL = 'https://hacker-news.firebaseio.com/v0/' 
const storiesApi = (api) => api + '.json'

const storyURI = (id) => HACKER_NEWS_API_URL + 'item/' + id + '.json'

const sliceRange = ({currentPage, perPage}) => [currentPage * perPage, (1 + currentPage) * perPage]

const responseHandler = (key) => (dispatch) => (options) => (response) => {
  const storiesIDs = response.data.slice(...sliceRange(options))
  const stories = storiesIDs.map(id => axios.get(storyURI(id)))
  dispatch({type: 'DATA_LOAD_STARTED', key})
  Promise.all(stories)
    .then(values => dispatch({
      type: 'DATA_LOAD_SUCCESS',
      key,
      values: values.map(value => value.data),
    }))
}

export default (api) =>({
  api: HACKER_NEWS_API_URL + storiesApi(api),
  responseHandler: responseHandler(api),
})

