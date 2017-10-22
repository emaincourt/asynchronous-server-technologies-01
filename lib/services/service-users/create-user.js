import Boom from 'boom';
import Joi from 'joi';
import { pick } from 'lodash';
import User from '../../models/user';

module.exports =
  method: 'POST'
  path: '/users'
  config:
    validate:
      payload:
        email: Joi.string().email().required()
        password: Joi.string().required()
    handler: ({ payload }, reply) ->
      user = new User(
        pick(payload, 'email', 'password')
      );
      await user.save();
      reply(
        user.details()
      ).code(201)
    response:
      status:
        201: Joi.object().keys(
          id: Joi.string().required()
          email: Joi.string().email().required()
          password: Joi.string().required()
        ).required()
