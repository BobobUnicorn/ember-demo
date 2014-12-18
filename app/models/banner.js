import DS from 'ember-data';

var Banner = DS.Model.extend({
  url: DS.attr('string')
});

export default Banner;
