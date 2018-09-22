import React, { Component } from 'react'
import axios from 'axios'

const withFetch = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      this.props.fetchOnLoad && this.fetchData()
    }

    fetchData() {
      axios.get(this.props.api)
        .then(this.props.responseHandler({
          currentPage: this.props.currentPage,
          perPage: this.props.perPage,
        }))
    }

    handleOnClick() {
      return this.props.fetchOnClick
      ?  () => this.fetchData()
      : null
    }

    render() {
      return this.props.isFetching
        ? <p>I am a nice spinner. Loading...</p>
        : <WrappedComponent {...this.props}
            onClick={this.handleOnClick()}
          />
    }
  }
}

export default withFetch
