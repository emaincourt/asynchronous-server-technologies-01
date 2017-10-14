import should from 'should';
import Joi from 'joi';
import v1 from '../lib/services/service-users/create-user.js';

describe('#validation', () => {
  it('validates a valid email and a password', (done) => {
    should(
      Joi.validate({
        email: 'any@domain.com',
        password: 'any-password',
      }, v1.config.validate.payload,
      ).error,
    ).not.be.ok();
    done();
  });

  it('doesn\'t validate a wrong email format', (done) => {
    should(
      Joi.validate({
        email: 'anywrongemail',
        password: 'any-password',
      }, v1.config.validate.payload,
      ).error,
    ).be.ok();
    done();
  });
});

describe('#handler', () => {
  it('creates an user and returns its details', (done) => {
    const reply = (params) => {
      should(
        params,
      ).have.keys('id', 'email', 'password');
      return {
        code: (status) => {
          should(
            status,
          ).equal(201);
        },
      };
    };
    v1.config.handler(
      { 
        payload: {
          email: 'any@domain.com',
          password: 'any-password',
        },
      },
      reply,
    ).then(done);
  });
});

describe('#response', () => {
  it('validates all the user fields as a 201 response', (done) => {
    should(
      Joi.validate({
        id: 'any-id',
        email: 'any@domain.com',
        password: 'any-password',
      }, v1.config.response.status[201],
      ).error,
    ).not.be.ok();
    done();
  });
});
