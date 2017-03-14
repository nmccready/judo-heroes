'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routesFactory from './routes';
import NotFoundPage from './components/notFoundPage';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

function getRouteConfig(req) {
  return {
    lazyLoadOpts: {
      offsetVertical: 150,
      lazyHeight: 200
    }
  };
}

// universal routing and rendering
app.get(/^\/(?!api).*/, (req, res) => {
  console.log(req.path + ' route: *');

  const config = getRouteConfig(req);

  const routes = routesFactory(config);
  console.log({routes});

  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup,  config: JSON.stringify(config)});
    }
  );
});

app.get('/api/config/route', (req, res, next) => {
  console.log(req.path + ' route: api/config/route');
  res.json(getRouteConfig(req))
  next()
});

// start the server
const port = process.env.BOILER_PORT || 4000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
