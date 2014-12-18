import Ember from 'ember';

var HomeIndexRoute = Ember.Route.extend({
  model: function (params) {
    var HOME_SCENES = {
      'en': ['main', 'games'],
      'fr': ['main', 'jeux']
    };
    var category;

    if (params.categoryName) {
      category = params.categoryName;
    } else {
      category = HOME_SCENES[this.get('session.language') || 'en'][0];
    }

    return category;
  },
  afterModel: function (categoryName) {
    this.transitionTo('home.category', categoryName);
  }
});

export default HomeIndexRoute;
