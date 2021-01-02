import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationsErrors: Errors = {};

  err.inner.forEach(error => {
    const errPath = error.path ? error.path : '';
    validationsErrors[errPath] = error.message;
  });
  return validationsErrors;
}
