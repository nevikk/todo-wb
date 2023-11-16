import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TIdToDelete } from '@/_redux/todo-module';
import { makeRequestConfig } from './make-request-config';

export const deleteTodoRequest = (id: TIdToDelete): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(id));
