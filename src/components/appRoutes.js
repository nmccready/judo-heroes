'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routesFactory from '../routes';

export default class AppRoutes extends React.Component {

  constructor(props){
    super(props)
  }

  render() {

    const routes = routesFactory(this.props.routeOptions);

    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
};
