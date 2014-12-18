import DS from 'ember-data';

var Cart = DS.Model.extend({
  skus: DS.hasMany('string')
});

export default Cart;
