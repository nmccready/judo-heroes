'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/layout';
import IndexPage from './components/indexPage';
import AthletePage from './components/products/page';
import NotFoundPage from './components/notFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="athlete/:id" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
