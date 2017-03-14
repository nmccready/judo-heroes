'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/layout';
import IndexPage from './components/indexPage';
import IndexTrackPage from './components/indexTrackPage';
import ProductsPage from './components/products/page';
import TracksPage from './components/tracks/page';

import NotFoundPage from './components/notFoundPage';


function routesFactory({lazyLoadOpts} = {}){
  console.log(`routesFactory: ${JSON.stringify(lazyLoadOpts)}`);

  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={IndexPage}
        lazyLoadOpts={lazyLoadOpts}/>
      <Route path="track" component={IndexTrackPage}
        lazyLoadOpts={lazyLoadOpts}/>

      <Route path="product/:id" component={ProductsPage}/>
      <Route path="track/:id" component={TracksPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  );
}

export default routesFactory;
