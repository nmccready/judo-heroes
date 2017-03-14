'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from '../notFoundPage';
import TracksMenu from './menu';

import entities from '../../data/itunes';

export default class TrackPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const track = entities.filter((p) => p.trackId == id)[0];

    if (!track) {
      return <NotFoundPage/>;
    }
    return (
      <div className="track-full">
        <TracksMenu entities={entities}/>
        <div className="track">
          <div className="picture-container">
            <img src={track.artworkUrl100}/>
            <h2 className="name">{track.trackName}</h2>
          </div>
          <section className="description">{track.collectionName}</section>
        </div>
        <div className="navigateBack">
          <Link to="/track">« Back to the track index</Link>
        </div>
      </div>
    );
  }
}
