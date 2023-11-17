import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import {
  TCreateTodoForm,
  setTodosIsLoadingFormStartAction,
  setTodosIsLoadingFormStopAction,
} from '@/_redux/todo-module';
import { createTodoRequest } from '@/api/requests/todos/create-todo';
import { getFetchTodosRequest } from '@/pages/todo/_utils/store-inject-configs/get-fetch-todos-request';

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
  titleMessageSuccess: 'Задача создана',
  titleMessageError: 'Задача создана',
  callBackOnSuccess: ({ dispatch }) => {
    successCallback();
    dispatch(
      initLoadManagerActionSaga({
        requestConfigList: [getFetchTodosRequest],
      }),
    );
  },
});
