import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { deleteTodoEndpoint } from '@/api/endpoints/todos/delete-todo';
import { TIdToDelete } from '@/_redux/todo-module';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (id: TIdToDelete): IRequestParams => ({
  body: id,
  endpoint: deleteTodoEndpoint(),
  translateFunction: requestTranslateFunction,
  responseSchema,
});
