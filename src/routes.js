'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/layout';
import IndexPage from './components/indexPage';
import ProductsPage from './components/products/page';
import NotFoundPage from './components/notFoundPage';


function routesFactory({lazyLoadOpts} = {}){
  console.log(`routesFactory: ${JSON.stringify(lazyLoadOpts)}`);

  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={IndexPage} lazyLoadOpts={lazyLoadOpts}/>
      <Route path="product/:id" component={ProductsPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  );
}

export default routesFactory;
