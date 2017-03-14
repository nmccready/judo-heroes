'use strict';

import React from 'react';
import TrackPreview from './tracks/preview';
import tracks from '../data/itunes';

export default class IndexTrackPage extends React.Component {
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
        <div className="tracks-selector">
          { tracks.map(track =>
            <TrackPreview
              key={track.trackId} {...track}
              lazyLoadOpts={lazyLoadOpts}
            />)}
        </div>
      </div>
    );
  }
}
