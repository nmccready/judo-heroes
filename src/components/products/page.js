'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from '../notFoundPage';
import ProductMenu from './menu';

import products from '../../data/products';

export default class ProductPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const product = products.filter((p) => p.id === id)[0];

    if (!product) {
      return <NotFoundPage/>;
    }
    // const headerStyle = { backgroundImage: `url(${product.cover})` };
    return (
      <div className="product-full">
        <ProductMenu products={products}/>
        <div className="product">
          {/* <header style={headerStyle}/> */}
          <div className="picture-container">
            <img src={product.image}/>
            <h2 className="name">{product.name}</h2>
          </div>
          <section className="description">{product.description}</section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
