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
  - once (detect events only one time)

  import LazyLoad from 'react-lazy-load'; // also supports IE 8 + (MIGHT be the reason to use this one)
*/

/*
  https://github.com/jasonslyvia/react-lazyload#props
  - once
  - height
  - offset
*/
import LazyLoad from 'react-lazyload'; // also supports IE 8 +
import _ from 'lodash';


export default class Preview extends React.Component {

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

    const {lazyLoadOpts, to, previewType, image, price, name} = this.props;
    console.log({lazyLoadOpts});
    const {offset, height} = lazyLoadOpts;

    if (_.isUndefined(offset) || _.isUndefined(height))
      throw new Error('ProductPreview missing variables');

    return (
      <Link to={to}>
        <div className={`${previewType}-preview`}>
          {/* <LazyLoad once offsetVertical={offset} height={height} > */}
          <LazyLoad once offset={offset} height={height} >
            <img src={image}/>
          </LazyLoad>
          <h2 className="name">{name}</h2>
          <span className="price">${price}</span>
        </div>
      </Link>
    );
  }
}
