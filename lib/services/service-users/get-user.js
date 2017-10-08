import Boom from 'boom';
import Joi from 'joi';
import User from '../../models/user';

export default {
  method: 'GET',
  path: '/users/{userId}',
  config: {
    validate: {
      params: {
        userId: Joi.string().required(),
      },
    },
    handler: async ({ params }, reply) => {
      const user = await User.findById(params.userId);
      if (!user) {
        return reply({}).code(404);
      }
      return reply(user).code(200);
    },
    response: {
      status: {
        200: Joi.object().keys({
          id: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required(),
        }).required(),
        404: Joi.object().keys(),
      },
    },
  },
}