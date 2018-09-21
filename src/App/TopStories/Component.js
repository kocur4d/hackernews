import React, {Component} from 'react'
import axios from 'axios'

import Stories from './Stories'

const HACKER_NEWS_API_URL = 'https://hacker-news.firebaseio.com/v0/' 
const TOP_STORIES_API = 'topstories.json'

const storyURI = (id) => HACKER_NEWS_API_URL + 'item/' + id + '.json'

class TopStories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetching: true,
      stories: []
    }
  }

  componentDidMount() {
    axios.get(HACKER_NEWS_API_URL+TOP_STORIES_API)
      .then(response => {
        const storiesIDs = response.data.slice(0, 10)
        const stories = storiesIDs.map(id => axios.get(storyURI(id)))
        Promise.all(stories)
          .then(values => {
            this.setState({
              fetching: false,
              stories: values.map(value => value.data),
            })
          })
      })
  }

  render() {
    return <div>
      {
        this.state.fetching
        ? <p>Loading...</p>
        : <Stories stories={this.state.stories}/>
      }
    </div>
  }
}

export default TopStories
