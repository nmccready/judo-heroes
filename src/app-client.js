'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/appRoutes';
import axios from 'axios';

window.onload = () => {
  let MobileDetect = require('./extensions/mobileDetect'),
    mobileDetect = new MobileDetect(window.navigator.userAgent);

  console.log('mobileDetect: mobile', mobileDetect.mobile());
  console.log('mobileDetect: isMobile', mobileDetect.isMobile());
  console.log('mobileDetect: isPhone', mobileDetect.isPhone());
  console.log('mobileDetect: isTablet', mobileDetect.isTablet());

  axios.get('/api/config/route').then((resp) => {
    ReactDOM.render(<AppRoutes routeOptions={resp.data}/>,
      document.getElementById('main'));
  });
};
