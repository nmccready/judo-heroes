'use strict';

import React from 'react';
import ProductPreview from './products/preview';
import products from '../data/products';

export default class IndexPage extends React.Component {
  render() {

    let {lazyLoadOpts} = this.props;
    // be nice to know where this is documented in react-router on getting options into a route
    lazyLoadOpts = lazyLoadOpts || this.props.route.lazyLoadOpts;

    // console.log("@@@@@ IndexPage @@@@@")
    // console.log("@@@@@ IndexPage: props @@@@@")
    // console.log(this.props);
    // console.log("@@@@@ IndexPage: lazyLoadOpts @@@@@")
    // console.log({lazyLoadOpts})

    return (
      <div className="home">
        <div className="products-selector">
          { products.map(prod =>
            <ProductPreview
              key={prod.id} {...prod}
              lazyLoadOpts={lazyLoadOpts}
            />)}
        </div>
      </div>
    );
  }
}
