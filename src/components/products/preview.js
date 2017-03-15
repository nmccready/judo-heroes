'use strict';
import React from 'react';
import Preview from '../preview'

export default class ProductPreview extends React.Component {
  render() {

    const previewType = 'product',
      to = `/product/${this.props.id}`;

    const options = Object.assign({}, this.props, {previewType,to});

    return (
      <Preview {...options}/>
    );
  }
}
