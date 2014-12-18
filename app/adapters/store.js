import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/store',
  buildURL: function (type, id) {
    var url = [];
    var host = this.get('host');
    var prefix = [this.urlPrefix(), this.get('session.language')].join('/');

    url.push(prefix);
    url.push(this.pathForType(type));
    url.push(encodeURIComponent(id));

    if (!host && url) {
      return '/' + url.join('/');
    } else {
      return url.join('/');
    }
  }
});
