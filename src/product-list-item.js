import React, { PropTypes } from 'react'

const ProductListItem = (props) => (
  <div
    className="product-list-item"
  >
    <img src={ props.thumb } />
    <br />
    { props.name }
    <br />
    { props.shortDescription }
    <br />
    { props.price }
  </div>
)

ProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumb: PropTypes.string.isRequired
}

export default ProductListItem
