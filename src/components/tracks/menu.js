'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class TracksMenu extends React.Component {
  render() {
    return (
      <nav className="tracks-menu">
        {this.props.entities.map(p => {
          return <Link key={p.trackId} to={`/track/${p.trackId}`} activeClassName="active">
            {p.trackName}
          </Link>;
        })}
      </nav>
    );
  }
}
