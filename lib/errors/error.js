class CueError extends Error {
  constructor(code, msg, ...args) {
    super(msg, code, ...args);
    this.code = code;
    this.info = msg;
  }
}

module.exports = CueError;
