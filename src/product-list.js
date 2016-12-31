import React, { PropTypes } from 'react'
import Product from './product-list-item'

const ProductList = (props) => (
  <div
    className="product-list"
  >
    {
      props.items.map((product, i) => (
        <Product
          { ...product }
          key={ `product-${i}` }
        />
      ))
    }
  </div>
)

ProductList.propTypes = {
  items: PropTypes.array
}

ProductList.defaultProps = {
  items: []
}

export default ProductList
