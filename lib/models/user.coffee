uuid = require 'uuid/v4';
faker = require 'faker';

module.exports = class User
  constructor: ({ @email, @password }) ->
    this.id = uuid()
  
  save: () ->
    Promise.resolve console.log "Saving user : #{this.id}"

  details: () ->
    id: this.id
    email: this.email
    password: this.password

  @findById: (id) ->
    email = faker.internet.email()
    password = faker.lorem.word()
    Promise.resolve(
      [
        { id, email, password }
      ].find((user) -> user.id == id)
    );

