import { call, put } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { setModalAction } from '@wildberries/notifications';
import i18next from 'i18next';
import { deleteTodoRequest } from '@/api/requests/todos/delete-todo';
import { getFetchTodosRequest } from '@/pages/todo/_utils/store-inject-configs/get-fetch-todos-request';
import { TODO_PAGE_TRANSLATES } from '@/pages/todo/_constants/translation';
import { TIdToDelete } from '../../_types';

export function* deleteTodoWorkerSaga(id: TIdToDelete) {
  try {
    const { error, errorText } = yield call(deleteTodoRequest, id);

    if (error) {
      throw new Error(errorText);
    }

    yield put(
      initLoadManagerActionSaga({
        requestConfigList: [getFetchTodosRequest],
      }),
    );

    yield put(
      setModalAction({
        status: 'success',
        title: i18next.t(TODO_PAGE_TRANSLATES.deleteTodoSuccessMessage),
      }),
    );
  } catch (error) {
    console.error('error in deleteTodoRequest', error.message);

    yield put(
      setModalAction({
        status: 'error',
        title: i18next.t(TODO_PAGE_TRANSLATES.deleteTodoErrorMessage),
      }),
    );
  }
}
