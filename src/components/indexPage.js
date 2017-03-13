'use strict';

import React from 'react';
import ProductPreview from './products/preview';
import products from '../data/products';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="products-selector">
          {products.map(prod => <ProductPreview key={prod.id} {...prod} />)}
        </div>
      </div>
    );
  }
}
