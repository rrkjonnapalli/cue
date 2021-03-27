module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'trace',
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || 8089,
  API_VERSION: process.env.API_VERSION || '1',
  TIMESTAMP_IGNORE_MODELS: (process.env.TIMESTAMP_IGNORE_MODELS || '').split(','),
  APP_DB_TYPE: 'SQLite', /** SQLite, pg */
  APP_DB_CONFIG: {
    STORAGE: 'data.db'
  },
  POSTGRES: {}
};
