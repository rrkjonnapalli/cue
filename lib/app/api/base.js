class BaseRouter {
  /**
   *
   * @param {GenericModel} model
   */

  constructor(model, validators) {
    this.model = model;
    this.validators = validators;
    this.router = require('express').Router({ mergeParams: true });
  }

  init() {
    this.router.get('/', (req, res) => {
      let { query = '{}', options = '{}' } = req.query || {};
      query = JSON.parse(query);
      options = JSON.parse(options);
      /** validate query and options */
      return this.model.read(query, options)
        .then((data) => res.status(200).send(data))
        .catch((error) => res.status(400).send(error));
    });

    this.router.post('/', (req, res) => {
      const { entity } = req.body;
      /** validate entity */
      return this.model.createOne(entity)
        .then((data) => res.status(201).send(data))
        .catch((error) => res.status(400).send(error));
    });

    this.router.patch('/:id', (req, res) => {
      const { update, options } = req.body;
      const { id } = req.params || {};
      /** validate update and options */
      return this.model.updateById(id, update, options)
        .then((data) => res.status(202).send(data))
        .catch((error) => res.status(400).send(error));
    });

    this.router.delete('/:id', (req, res) => {
      let { options = {} } = req.query || {};
      const { id } = req.params || {};
      options = JSON.parse(options);
      /** validate options */
      return this.model.deleteById(id, options)
        .then((data) => res.status(202).send(data))
        .catch((error) => res.status(400).send(error));
    });

    this.router.get('/:id', (req, res) => {
      let { options = {} } = req.query || {};
      const { id } = req.params || {};
      options = JSON.parse(options);
      /** validate options */
      return this.model.readById(id, options)
        .then((data) => res.status(200).send(data))
        .catch((error) => res.status(400).send(error));
    });
  }

  getInstance() {
    return this.router;
  }
}

module.exports = BaseRouter;
