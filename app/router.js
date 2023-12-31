import EmberRouter from '@ember/routing/router';
import config from 'ember-ministore/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // This had to be manually adjusted after generating the route
  this.route('item', { path: '/item/:item_id' });
  this.route('not-found', { path: '/*path' });
  this.route('cart', { path: '/shopping-cart' });
});
