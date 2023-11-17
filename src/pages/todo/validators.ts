import { SimpleValidator, composeValidators } from '@mihanizm56/validators';

const simpleValidator = new SimpleValidator();

export const isRequiredValidator = composeValidators([
  simpleValidator.requiredValidator(),
]);
