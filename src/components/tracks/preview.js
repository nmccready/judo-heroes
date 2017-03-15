'use strict';

import React from 'react';
import Preview from '../preview'


export default class TrackPreview extends React.Component {
  render() {

    const previewType = 'track',
      to = `/track/${this.props.trackId}`,
      name = this.props.trackName,
      price = this.props.trackPrice,
      image = this.props.artworkUrl100;

    const options = Object.assign({}, this.props, {
      previewType,
      to,
      price,
      name,
      image
    });

    return (
      <Preview {...options}/>
    );
  }
}
