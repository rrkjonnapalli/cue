const { Model } = require('sequelize');
const { MODEL: MODEL_ERRORS } = require('@lib/errors');
const { sequelize: definitions } = require('../../definitions');

module.exports = (connection) => {
  const { User: UserDefinitions } = definitions;
  const { definition, options } = UserDefinitions;
  class User extends Model {
    static async signinWithPassword(username, password) {
      return User.findOne({
        where: {
          email: username
        }
      }).then((user) => {
        if (!user) {
          return Promise.reject(MODEL_ERRORS.USER.USER_NOT_FOUND);
        }
        if (user.password !== password) {
          return Promise.reject(MODEL_ERRORS.USER.INVALID_PASSWORD);
        }
        return Promise.resolve(user);
      });
    }

    static async singup(doc) {
      /** validate user */
      return User.create(doc);
    }
  }

  User.init(definition, {
    sequelize: connection,
    ...options
  });
  return User;
};
