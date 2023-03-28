const joi = require("joi");

const schema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

function validate({ username, password }) {
  const res = schema.validate({
    username,
    password,
  });
  return res;
}

exports.validate = validate;
