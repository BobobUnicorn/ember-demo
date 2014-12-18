import Ember from 'ember';

var RootRoute = Ember.Route.extend({
  model: function () {
    return this.get('session');
  },
  afterModel: function (session) {
    var language = session.get('language');
    var country = session.get('country');
    if (language && country) {
      var locale = language.toLowerCase() + '-' + country.toLowerCase();
      this.transitionTo('lang', locale);
    } else {
      // display store picker.
    }
  }
});

export default RootRoute;
