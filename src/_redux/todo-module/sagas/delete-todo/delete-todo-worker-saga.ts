import { call, put } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { setModalAction } from '@wildberries/notifications';
import { deleteTodoRequest } from '@/api/requests/todos/delete-todo';
import { getFetchTodosRequestConfigList } from '@/pages/todo/_utils/store-inject-configs/get-fetch-todos-request-config-list';
import { TIdToDelete } from '../../_types';

export function* deleteTodoWorkekSaga(id: TIdToDelete) {
  try {
    const { error, errorText } = yield call(deleteTodoRequest, id);

    if (error) {
      throw new Error(errorText);
    }

    yield put(
      initLoadManagerActionSaga({
        requestConfigList: [getFetchTodosRequestConfigList],
      }),
    );

    yield put(
      setModalAction({
        status: 'success',
        title: 'Задача удалена',
      }),
    );
  } catch (error) {
    console.error('error in deleteTodoRequest', error.message);

    yield put(
      setModalAction({
        status: 'error',
        title: 'Произошла ошибка при удалении',
      }),
    );
  }
}
