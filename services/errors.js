import mongoose from 'mongoose';
import _ from 'lodash';

const { ValidationError, ValidatorError } = mongoose.Error;

export const formatError = (err) => {
  if (err.name === 'ValidationError') {
    return _.map(err.errors, x => _.pick(x, ['path', 'message']));
  }

  return [{ path: 'name', message: 'Something went wrong' }];
};

export const handleError = (path, message) => {
  const error = new ValidationError(null);
  error.addError(path, new ValidatorError({ path, message }));
  return error;
};
