import DS from 'ember-data';

var Homepage = DS.Model.extend({
  title: DS.attr('string'),
  banners: DS.hasMany('banner'),
  backgrounds: DS.hasMany('background')
});

export default Homepage;
