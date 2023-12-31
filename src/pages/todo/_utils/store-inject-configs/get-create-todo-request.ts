import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import {
  TCreateTodoForm,
  setTodosIsLoadingFormStartAction,
  setTodosIsLoadingFormStopAction,
} from '@/_redux/todo-module';
import { createTodoRequest } from '@/api/requests/todos/create-todo';
import { getFetchTodosRequest } from '@/pages/todo/_utils/store-inject-configs/get-fetch-todos-request';
import { TODO_PAGE_TRANSLATES } from '../../_constants/translation';

type TParams = {
  data: TCreateTodoForm;
  successCallback: () => void;
};

export const getCreateTodoRequest = ({
  data,
  successCallback,
}: TParams): FormManagerType => ({
  formValues: data,
  loadingStartAction: setTodosIsLoadingFormStartAction,
  loadingStopAction: setTodosIsLoadingFormStopAction,
  formRequest: createTodoRequest,
  showNotification: true,
  titleMessageSuccess: i18next.t(TODO_PAGE_TRANSLATES.createTodoSuccessMessage),
  titleMessageError: i18next.t(TODO_PAGE_TRANSLATES.createTodoErrorMessage),
  callBackOnSuccess: ({ dispatch }) => {
    successCallback();
    dispatch(
      initLoadManagerActionSaga({
        requestConfigList: [getFetchTodosRequest],
      }),
    );
  },
});
