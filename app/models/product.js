import DS from 'ember-data';

var Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('string'),
  skus: DS.hasMany('string')
});

export default Product;
