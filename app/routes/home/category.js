import Ember from 'ember';

var HomeCategoryRoute = Ember.Route.extend({
  model: function (params) {
    var name = params.categoryName;

    var pageModel = this.store.find('homepage', name).then(function (x) {
      console.log(x);
      return x;
    }, function (x) {
      console.log(x);
      return Ember.RSVP.reject(x);
    });
    return pageModel;
  }
});

export default HomeCategoryRoute;
