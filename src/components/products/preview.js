'use strict';

import React from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import _ from 'lodash';

export default class ProductPreview extends React.Component {

  componentDidMount(){
    console.log('ProductPreview mounted: ' + this.props.id);
  }

  componentDidUpdate(){
    console.log('ProductPreview updated: ' + this.props.id);
  }

  render() {
    console.log("@@@@@ ProductPreview @@@@@")
    // console.log(this.props);

    const {lazyLoadOpts} = this.props;
    console.log({lazyLoadOpts});
    const {offsetVertical, lazyHeight} = lazyLoadOpts;

    console.log({offsetVertical, lazyHeight});

    if (_.isUndefined(offsetVertical) || _.isUndefined(lazyHeight))
      throw new Error('ProductPreview missing variables');

    return (
      <Link to={`/product/${this.props.id}`}>
        <div className="product-preview">
          <LazyLoad once offsetVertical={300} height={500} >
            <img src={this.props.image}/>
          </LazyLoad>
          <h2 className="name">{this.props.name}</h2>
          <span className="price">${this.props.price}</span>
        </div>
      </Link>
    );
  }
}
