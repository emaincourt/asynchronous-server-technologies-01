import uuid from 'uuid/v4';
import faker from 'faker';

export default class User
  constructor: ({ @email, @password }) ->
    this.id = uuid()
  
  save = async () ->
    Promise.resolve(
      console.log("Saving user : #{this.id}")
    );

  details = () ->
    id: this.id
    email: this.email
    password: this.password

  @findById = async (id) ->
    email = faker.internet.email()
    password = faker.lorem.word()
    Promise.resolve(
      [
        { id, email, password }
      ].find(user => user.id == id)
    );

