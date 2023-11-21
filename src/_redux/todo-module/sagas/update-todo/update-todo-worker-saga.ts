import { call, put, select } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import { batchActions } from 'redux-batched-actions';
import i18next from 'i18next';
import { TTodo, setTodosAction, TUpdateTodo } from '@/_redux/todo-module';
import { updateTodoRequest } from '@/api/requests/todos/update-todo';
import { TODO_PAGE_TRANSLATES } from '@/pages/todo/_constants/translation';
import { formatDataToUpdateTodo } from '@/_utils/format-data-to-update-todo';
import { todoTodosSelector } from '../../selectors';

export function* updateTodoWorkerSaga({ id, title, description }: TUpdateTodo) {
  try {
    const currentTodos: Array<TTodo> = yield select(todoTodosSelector);

    const todoToUpdate = currentTodos.find((todo: TTodo) => todo.id === id);

    if (!todoToUpdate) {
      throw new Error(i18next.t(TODO_PAGE_TRANSLATES.updateTodoErrorMessage));
    }

    const dataToUpdate = formatDataToUpdateTodo(
      { id, title, description },
      todoToUpdate,
    );

    const { error, errorText } = yield call(updateTodoRequest, dataToUpdate);

    if (error) {
      throw new Error(errorText);
    }

    const newTodos = currentTodos.map((todo: TTodo) =>
      todo.id === id ? { ...todo, title, description } : todo,
    );

    yield put(
      batchActions([
        setTodosAction(newTodos),
        setModalAction({
          status: 'success',
          title: i18next.t(TODO_PAGE_TRANSLATES.updateTodoSuccessMessage),
        }),
      ]),
    );
  } catch (error) {
    console.error('error in updateTodoRequest', error.message);

    yield put(
      setModalAction({
        status: 'error',
        title: i18next.t(TODO_PAGE_TRANSLATES.updateTodoErrorMessage),
      }),
    );
  }
}
