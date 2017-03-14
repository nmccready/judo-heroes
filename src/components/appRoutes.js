'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routesFactory from '../routes';
import axios from 'axios';

export default class AppRoutes extends React.Component {

  constructor(props){
    super(props)
    this.state = {config:null};

    const configRoute = '/api/config/route';

    axios.get(configRoute).then((resp) => {
      console.log(configRoute + ' response')
      console.log(resp);
      this.setState({config:resp.data});
    });
  }

  render() {
    if(!this.state.config)
      return (<div></div>);

    const routes = routesFactory(this.state.config);

    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
};
