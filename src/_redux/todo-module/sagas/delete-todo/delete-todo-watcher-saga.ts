import { take, fork } from 'redux-saga/effects';
import { deleteTodoActionSaga } from '../../actions';
import { TIdToDelete } from '../../_types';
import { deleteTodoWorkerSaga } from './delete-todo-worker-saga';

export const DELETE_TODO_WATCHER_SAGA_NAME = 'DELETE_TODO_WATCHER_SAGA';

export function* deleteTodoWatcherSaga() {
  while (true) {
    const { payload }: { payload: TIdToDelete } = yield take(
      deleteTodoActionSaga.type,
    );

    yield fork(deleteTodoWorkerSaga, payload);
  }
}
