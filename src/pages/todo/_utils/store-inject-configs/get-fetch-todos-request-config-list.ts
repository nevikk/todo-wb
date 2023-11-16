import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import {
  setTodosAction,
  setTodosIsLoadingStartAction,
  setTodosIsLoadingStopAction,
} from '@/_redux/todo-module';
import { getFetchTodosListRequestConfigList } from '@/api/requests/todos/fetch-todos-list';

export const getFetchTodosRequestConfigList: InitLoadManagerRequestOptionsType =
  {
    request: getFetchTodosListRequestConfigList,
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
