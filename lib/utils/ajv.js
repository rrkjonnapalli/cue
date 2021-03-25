const { default: Ajv } = require('ajv');

const ajv = new Ajv({
  allErrors: true,
  allowUnionTypes: true,
  removeAdditional: true
});

module.exports = ajv;
