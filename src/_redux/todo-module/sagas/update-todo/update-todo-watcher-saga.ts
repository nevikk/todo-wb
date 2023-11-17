import { fork, take } from 'redux-saga/effects';
import { TUpdateTodo } from '../../_types';
import { updateTodoActionSaga } from '../../actions';
import { updateTodoWorkerSaga } from './update-todo-worker-saga';

export const UPDATE_TODO_WATCHER_SAGA_NAME = 'UPDATE_TODO_WATCHER_SAGA';

export function* updateTodoWatcherSaga() {
  while (true) {
    const { payload }: { payload: TUpdateTodo } = yield take(
      updateTodoActionSaga.type,
    );

    yield fork(updateTodoWorkerSaga, payload);
  }
}
