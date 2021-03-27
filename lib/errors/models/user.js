const CueError = require('../error');

module.exports = {
  get INVALID_PASSWORD() {
    return new CueError('MODEL-USER-0001', 'invalid password');
  },
  get USER_NOT_FOUND() {
    return new CueError('MODEL-USER-0002', 'user not found');
  }
};
