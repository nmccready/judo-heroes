'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/appRoutes';
// import axios from 'axios';
import {routeConfigFactory} from './routeConfig'

window.onload = () => {
  const config = routeConfigFactory({userAgent: window.navigator.userAgent});
  ReactDOM.render(<AppRoutes routeOptions={config}/>,
    document.getElementById('main'));
};
