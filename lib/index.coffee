{ Server } = require 'hapi';
createUser = require './services/service-users/create-user';
getUser = require './services/service-users/get-user';

server = new Server();

server.connection(
  port: process.env.PORT || 3000
  host: '0.0.0.0'
  routes: { cors: true }
);

server.route([
  createUser,
  getUser,
]);

server.start((err) ->
  if err
    throw err;
  console.log "Server running at: #{server.info.uri}"
);
