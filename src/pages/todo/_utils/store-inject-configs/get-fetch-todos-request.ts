import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import {
  setTodosAction,
  setTodosIsLoadingStartAction,
  setTodosIsLoadingStopAction,
} from '@/_redux/todo-module';
import { getFetchTodosListCachedRequest } from '@/api/requests/todos/fetch-todos-list-cached';
import { TODO_PAGE_TRANSLATES } from '../../_constants/translation';

export const getFetchTodosRequest: InitLoadManagerRequestOptionsType = {
  request: getFetchTodosListCachedRequest,
  loadingStartAction: setTodosIsLoadingStartAction,
  loadingStopAction: setTodosIsLoadingStopAction,
  showErrorNotification: true,
  titleMessageError: i18next.t(TODO_PAGE_TRANSLATES.fetchTodosErrorMessage),
  requestExtraDataHandlerOptions: [
    {
      fieldName: 'todos',
      action: setTodosAction,
    },
  ],
};
