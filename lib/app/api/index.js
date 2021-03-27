const router = require('express').Router({ mergeParams: true });
const { Logger } = require('@lib/utils');
const BaseRouter = require('./base');

const log = Logger('API');

const getAPIRouter = (models) => {
  /** initialize basic routes for all models */
  for (const [modelName, model] of Object.entries(models)) {
    log.trace('Registering basic router for model - %s at path - /%s', modelName, model.path);
    const modelRouter = new BaseRouter(model);
    modelRouter.init();
    router.use(`/${model.path}`, modelRouter.getInstance());
  }
  return router;
};

module.exports = getAPIRouter;
