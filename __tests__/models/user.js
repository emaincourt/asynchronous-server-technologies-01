import faker from 'faker';
import { pick } from 'lodash';
import User from '../../lib/models/user';

describe('#constructor', () => {
  it('creates an user with the right parameters', () => {
    expect.assertions(1);
    const params = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const user = new User(params);
    expect(
      user.details(),
    ).toMatchObject({
      ...params,
      id: user.id,
    });
  });

  it('generates an id for each newly created user', () => {
    expect.assertions(4);
    const params = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    [
      new User(
        pick(params, 'email')
      ),
      new User(
        pick(params, 'password')
      ),
      new User(params),
      new User({}),
    ].map(
      user => expect(user.id).toBeTruthy(),
    );
  });
});

describe('#methods', () => {
  it('saves a newly created user', async () => {
    expect.assertions(1);
    const mocks = {
      'console.log': jest.spyOn(console, 'log')
        .mockImplementationOnce(() => {}),
    };
    const params = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const user = new User(params);
    await user.save();
    expect(mocks['console.log']).toHaveBeenCalled();
    Object.keys(mocks).forEach(mock => mocks[mock].mockRestore());
  });

  it('gets the details of the user', () => {
    expect.assertions(1);
    const params = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const user = new User(params);
    expect(
      user.details(),
    ).toMatchObject({
      id: user.id,
      ...params,
    });
  });

  it('mocks the ability to fetch an user from database with mocked data', async () => {
    expect.assertions(2);
    const id = faker.random.uuid();
    const user = await User.findById(id);
    expect(
      Object.keys(user),
    ).toEqual(
      expect.arrayContaining(['id', 'email', 'password'])
    );
    expect(
      user.id,
    ).toEqual(id);
  });
});