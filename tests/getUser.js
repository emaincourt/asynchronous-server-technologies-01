import should from 'should';
import Joi from 'joi';
import v1 from '../lib/services/service-users/get-user.js';

describe('#validation', () => {
  it('validates an user id as a query parameter', (done) => {
    should(
      Joi.validate({
        userId: 'any-id',
      }, v1.config.validate.params,
      ).error,
    ).not.be.ok();
    done();
  });
});

describe('#handler', () => {
  it('gets an user', (done) => {
    const reply = (params) => {
      should(
        params,
      ).have.keys('id', 'email', 'password');
      return {
        code: (status) => {
          should(
            status,
          ).equal(200);
        },
      };
    };
    v1.config.handler(
      { 
        params: {
          userId: 'any-id',
        },
      },
      reply,
    ).then(done);
  });
});

describe('#response', () => {
  it('validates all the user fields as a 200 response', (done) => {
    should(
      Joi.validate({
        id: 'any-id',
        email: 'any@domain.com',
        password: 'any-password',
      }, v1.config.response.status[200],
      ).error,
    ).not.be.ok();
    done();
  });

  it('validates an empty object as a response if no users do match the constraints', (done) => {
    should(
      Joi.validate({}, v1.config.response.status[404]).error,
    ).not.be.ok();
    done();
  });
});
