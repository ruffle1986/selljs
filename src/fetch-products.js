import React, { PropTypes } from 'react'
import products from '../data/products.json'

export default React.createClass({

  displayName: 'FetchProducts',

  propTypes: {
    children: PropTypes.func.isRequired
  },

  componentDidMount() {
    this.setState({
      isLoading: true
    }, () => {
      setTimeout(() => {
        this.setState({
          isLoading: false,
          products,
        })
      }, 500)
    })
  },

  getInitialState() {
    return {
      isLoading: false,
      products: []
    }
  },

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return this.props.children(this.state.products)
  }
})
