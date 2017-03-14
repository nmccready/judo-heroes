'use strict';

import React from 'react';
import { Link } from 'react-router';
/* tried react-lazy: w/ no luck
  considered due to:
  - IE support and
  - checkElementsInViewPort (ultra lazy eval); useful for resize
  - onLoad callback prop
*/
/*
  LazyLoad options: https://github.com/loktar00/react-lazy-load
  - offsetVertical
  - offsetHorizontal
  - offsetTop
  - offsetBottom
  - offsetLeft
  - offsetRight
  - throttle
  - debounce
  - height: hardcoded/injected element size used for calculating when the element is in view (speeds up the process and avoids warning of dynamic calculation)
  - width
  - onContentVisible: callback prop to notify that an element has been made visible
*/
import LazyLoad from 'react-lazyload'; // also supports IE 8 +
import _ from 'lodash';

export default class ProductPreview extends React.Component {

  // componentDidMount(){
  //   console.log('ProductPreview mounted: ' + this.props.id);
  // }
  //
  // componentDidUpdate(){
  //   console.log('ProductPreview updated: ' + this.props.id);
  // }

  render() {
    // console.log("@@@@@ ProductPreview @@@@@")
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
          <LazyLoad once offsetVertical={offsetVertical} height={lazyHeight} >
            <img src={this.props.image}/>
          </LazyLoad>
          <h2 className="name">{this.props.name}</h2>
          <span className="price">${this.props.price}</span>
        </div>
      </Link>
    );
  }
}
