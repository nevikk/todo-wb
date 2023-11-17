import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import uiReducer, { MODULE_REDUCER_NAME } from '@/_redux/ui-module';
import todoReducer, { TODO_REDUCER_NAME } from '@/_redux/todo-module';
import {
  DELETE_TODO_WATCHER_SAGA_NAME,
  deleteTodoWatcherSaga,
} from '@/_redux/todo-module/sagas/delete-todo/delete-todo-watcher-saga';
import {
  UPDATE_TODO_WATCHER_SAGA_NAME,
  updateTodoWatcherSaga,
} from '@/_redux/todo-module/sagas/update-todo/update-todo-watcher-saga';
import { getFetchTodosRequest } from '../_utils/store-inject-configs/get-fetch-todos-request';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: MODULE_REDUCER_NAME,
      reducer: uiReducer,
    },
    {
      name: TODO_REDUCER_NAME,
      reducer: todoReducer,
    },
  ],
  sagasToInject: [
    {
      name: DELETE_TODO_WATCHER_SAGA_NAME,
      saga: deleteTodoWatcherSaga,
    },
    {
      name: UPDATE_TODO_WATCHER_SAGA_NAME,
      saga: updateTodoWatcherSaga,
    },
  ],

  initialLoadManagerConfig: {
    requestConfigList: [getFetchTodosRequest],
  },
};
