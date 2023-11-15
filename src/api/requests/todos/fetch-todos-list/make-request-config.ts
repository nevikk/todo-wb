import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { getTodosListEndpoint } from '@/api/endpoints/todos/get-todos-list';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (): IRequestParams => ({
  endpoint: getTodosListEndpoint(),
  translateFunction: requestTranslateFunction,
  responseSchema,
});
