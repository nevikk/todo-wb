import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const getFetchTodosListCachedRequest = (): Promise<IResponse> =>
  new RestRequest().getRequest(makeRequestConfig());
