import uuid from 'uuid/v4';
import faker from 'faker';

export default class User {
  constructor({ email, password }) {
    this.id = uuid();
    this.email = email;
    this.password = password;
  }

  async save() {
    return Promise.resolve(
      console.log(`Saving user : ${this.id}`),
    );
  }

  details() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
    };
  }

  static async findById(id) {
    const email = faker.internet.email();
    const password = faker.lorem.word();
    return Promise.resolve(
      [
        { id, email, password },
      ].find(user => user.id === id),
    );
  }
}