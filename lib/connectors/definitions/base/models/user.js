/* eslint-disable no-unused-vars */
const { GENERIC: GENERIC_ERRORS } = require('@lib/errors');
const Base = require('../base');

class User extends Base {
  static async signinWithPassword(username, password) {
    return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED);
  }

  static async signup(doc) {
    return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED);
  }

  static async forgotPassword(username) {
    return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED);
  }

  static async resetPassword(username) {
    return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED);
  }

  static async changePassword() {
    return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED);
  }
}

module.exports = User;
