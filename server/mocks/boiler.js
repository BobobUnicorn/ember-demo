/**
 * A mocked server providing user information.
 */

module.exports = function (app) {
  var express = require('express');
  var path = require('path');
  var boilerRouter = express.Router();

  var clientCart = {};
  var clientOwned = {};

  boilerRouter.get('/session', function (req, res) {
    console.log('getting session');
    res.sendFile(path.resolve(__dirname, 'boiler', 'session.json'));
  });

  boilerRouter.get('/entitlements/:id', function (req, res) {
    var entitlements = clientOwned[req.params.id];
    if (!entitlements) {
      clientOwned[req.params.id] = entitlements = [];
    }
    res.send({
      data: entitlements,
      headers: {
        status: '0x0000',
        message: 'success'
      }
    });
  });

  boilerRouter.get('/cart/:id', function (req, res) {
    var cart = clientCart[req.params.id];
    if (!cart) {
      clientCart[req.params.id] = cart = [];
    }
    res.send({
      data: cart,
      headers: {
        status: '0x0000',
        message: 'success'
      }
    });
  });

  boilerRouter.post('/cart/:id/:sku', function (req, res) {
    var id = req.params.id;
    if (!clientCart[id]) {
      clientCart[id] = [];
    }
    clientCart[id].push(req.params.sku);
    res.status(204)
      .end();
  });

  boilerRouter.post('/cart/buy/:id', function (req, res) {
    var id = req.params.id;
    if (!clientCart[id]) {
      clientCart[id] = [];
    }
    if (!clientOwned[id]) {
      clientOwned[id] = [];
    }
    clientOwned[id] = clientOwned[id].concat(clientCart[id]);
    clientCart[id] = [];
    res.status(204)
      .end();
  });

  app.use('/api/boiler', boilerRouter);
};
