import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TFormattedUpdateTodo } from '@/_redux/todo-module';
import { makeRequestConfig } from './make-request-config';

export const updateTodoRequest = (
  dateToUpdate: TFormattedUpdateTodo,
): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(dateToUpdate));
