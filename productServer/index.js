'use strict';

const Hapi = require('hapi');
const productsList = require('./products.json');

const server = new Hapi.Server();
server.connection({ port: 8080, routes: {cors: true}, host: 'localhost'});

const io = require('socket.io')(server.listener);

io.on('connection', function (socket) {
    setInterval(() => {
        const productListLength = productsList.products.length;
        const randIndx = Math.floor(Math.random() * productListLength);
        const randPrice = Math.floor(Math.random() * 200) + 100;
        socket.emit('price', {productId: productsList.products[randIndx].id, price: randPrice})
    }, 600);
});

server.route({
  method: 'GET',
  path: '/products',
  handler: function (request, reply) {
      reply(productsList);
  }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});