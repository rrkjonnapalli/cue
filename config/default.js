module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'trace',
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || 8089,
  TIMESTAMP_IGNORE_MODELS: (process.env.TIMESTAMP_IGNORE_MODELS || '').split(',')
};
