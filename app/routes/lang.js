import Ember from 'ember';

var LangRoute = Ember.Route.extend({
  afterModel: function () {
    this.transitionTo('home');
  }
  // serialize: function (model) {
  //   return { languageAndCountry: model.get('language').toLowerCase() + '-' + model.get('country').toLowerCase() };
  // }
});

export default LangRoute;
