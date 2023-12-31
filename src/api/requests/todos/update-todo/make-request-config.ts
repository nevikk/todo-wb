import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { TFormattedUpdateTodo } from '@/_redux/todo-module';
import { updateTodoEndpoint } from '@/api/endpoints/todos/update-todo';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (
  dataToUpdate: TFormattedUpdateTodo,
): IRequestParams => ({
  body: dataToUpdate,
  endpoint: updateTodoEndpoint(),
  translateFunction: requestTranslateFunction,
  responseSchema,
});
