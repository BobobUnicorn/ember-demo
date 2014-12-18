import Ember from 'ember';
var RSVP = Ember.RSVP;

var setUpRedirectRouter = function (App) {
  // TODO
  // App.Router.reopen({
  //   location: 'auto'
  // });
};

var openSession = function (container, application) {
  var makeSession = function (data) {
    return Ember.Object.extend({
      country: data.country,
      language: data.language,
      id: data.id
    });
  };

  var ajaxPromise = RSVP.cast(Ember.$.getJSON('api/boiler/session'))
    .then(function checkHeaders(data) {
      if (data.header && data.header.status !== '0x0000') {
        return RSVP.reject(data);
      } else {
        return RSVP.resolve(data.data);
      }
    })
    .then(function onSuccess(data) {
      // Make session available to all controllers.
      application.register('session:current', makeSession(data), { singleton: true });
      application.inject('controller', 'session', 'session:current');
      application.inject('route', 'session', 'session:current');
      application.inject('adapter', 'session', 'session:current');
      application.advanceReadiness();
      return RSVP.resolve(data);
    }, function onFail(jqXHR) {
      // Failure?
      application.advanceReadiness();
      return RSVP.reject(jqXHR);
    });

  application.deferReadiness();

  return ajaxPromise;
};

var initialize = function (App) {
  // var promises = [];
  // Do hash-bang conversion stuff?
  // setUpRedirectRouter(App);
  App.initializer({
    name: 'session',
    initialize: openSession
  });
};

export default initialize;
