import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  extractSingle: function (store, type, payload, id) {
    payload = { homepage: payload };
    return this._super(store, type, payload, id);
  },
  attrs: {
    banners: { embedded: 'always' },
    backgrounds: { embedded: 'always' }
  }
});
