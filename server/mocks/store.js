/**
 * A mocked server providing store information.
 */

module.exports = function(app) {
  var express = require('express');
  var path = require('path');
  var storeRouter = express.Router();

  storeRouter.get('/', function(req, res) {
    res.send({
      "store": []
    });
  });

  storeRouter.get('/:lang/homepages/:category', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'store', 'homepage.json'));
  });

  app.use('/api/store', storeRouter);
};
