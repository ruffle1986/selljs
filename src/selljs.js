import React from 'react'
import FetchProducts from './fetch-products'
import ProductList from './product-list'

const Sell = () => (
  <FetchProducts>
    { products => <ProductList items={ products } /> }
  </FetchProducts>
)

export default Sell
