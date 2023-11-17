import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { TCreateTodoForm } from '@/_redux/todo-module';
import { createTodoEndpoint } from '@/api/endpoints/todos/create-todo';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (body: TCreateTodoForm): IRequestParams => ({
  endpoint: createTodoEndpoint(),
  body,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
