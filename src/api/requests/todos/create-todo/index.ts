import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TCreateTodoForm } from '@/_redux/todo-module';
import { makeRequestConfig } from './make-request-config';

type TParams = {
  body: TCreateTodoForm;
};

export const createTodoRequest = ({ body }: TParams): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(body));
