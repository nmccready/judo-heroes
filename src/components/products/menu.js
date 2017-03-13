'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ProductMenu extends React.Component {
  render() {
    return (
      <nav className="athletes-menu">
        {this.props.products.map(p => {
          return <Link key={p.id} to={`/product/${p.id}`} activeClassName="active">
            {p.name}
          </Link>;
        })}
      </nav>
    );
  }
}
