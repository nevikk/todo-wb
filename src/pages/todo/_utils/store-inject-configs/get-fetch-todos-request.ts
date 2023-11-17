import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import {
  setTodosAction,
  setTodosIsLoadingStartAction,
  setTodosIsLoadingStopAction,
} from '@/_redux/todo-module';
import { getFetchTodosListCachedRequest } from '@/api/requests/todos/fetch-todos-list-cached';

export const getFetchTodosRequest: InitLoadManagerRequestOptionsType = {
  request: getFetchTodosListCachedRequest,
  loadingStartAction: setTodosIsLoadingStartAction,
  loadingStopAction: setTodosIsLoadingStopAction,
  showErrorNotification: true,
  titleMessageError: 'Ошибка при получении todo',
  requestExtraDataHandlerOptions: [
    {
      fieldName: 'todos',
      action: setTodosAction,
    },
  ],
};
