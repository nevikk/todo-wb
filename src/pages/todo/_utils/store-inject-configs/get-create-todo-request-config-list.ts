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
import { getFetchTodosRequestConfigList } from '@/pages/todo/_utils/store-inject-configs/get-fetch-todos-request-config-list';

type TProps = {
  data: TCreateTodoForm;
  successCallback: () => void;
};

export const getCreateTodoConfigList = ({
  data,
  successCallback,
}: TProps): FormManagerType => ({
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
        requestConfigList: [getFetchTodosRequestConfigList],
      }),
    );
  },
});
