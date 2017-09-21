'use strict';

const Hapi = require('hapi');
const productsList = require('products.json');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

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