import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('root', { path: '/' });
  this.resource('lang', { path: '/:languageAndCountry'}, function () {
    this.resource('home', { path: '/home' }, function () {
      this.route('category', { path: '/:categoryName' });
    });
    this.route('product', { path: '/:productName/:cid' });
  }); // Child routes defined there.
});

Router.reopen({
  location: 'auto'
});

export default Router;
