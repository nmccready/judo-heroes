'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/appRoutes';
import axios from 'axios';

window.onload = () => {
  axios.get('/api/config/route').then((resp) => {
    ReactDOM.render(<AppRoutes routeOptions={resp.data}/>,
      document.getElementById('main'));
  });
};
