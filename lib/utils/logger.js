const config = require('config');
const pino = require('pino')({
  prettyPrint: {
    colorize: true,
    messageFormat: '[{service}] {msg}',
    ignore: 'service,hostname,pid',
    translateTime: true
  },
  level: config.get('LOG_LEVEL')
});

module.exports = (data) => {
  let service = data;
  if (typeof data === 'object') {
    ({ service } = data);
  }
  return pino.child({ service });
};
