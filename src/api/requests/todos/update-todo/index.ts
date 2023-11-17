import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TUpdateTodo } from '@/_redux/todo-module';
import { makeRequestConfig } from './make-request-config';

export const updateTodoRequest = (
  dateToUpdate: TUpdateTodo,
): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(dateToUpdate));
