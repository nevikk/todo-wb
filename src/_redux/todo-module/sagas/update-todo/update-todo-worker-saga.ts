import { call, put, select } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import { batchActions } from 'redux-batched-actions';
import { TTodo, setTodosAction, TUpdateTodo } from '@/_redux/todo-module';
import { updateTodoRequest } from '@/api/requests/todos/update-todo';
import { todoTodosSelector } from '../../selectors';

export function* updateTodoWorkerSaga({ id, title, description }: TUpdateTodo) {
  try {
    const { error, errorText } = yield call(updateTodoRequest, {
      id,
      title,
      description,
    });

    if (error) {
      throw new Error(errorText);
    }

    const currentTodos: Array<TTodo> = yield select(todoTodosSelector);

    const newTodos = currentTodos.map((todo: TTodo) =>
      todo.id === id ? { ...todo, id, title, description } : { ...todo },
    );

    yield put(batchActions([setTodosAction(newTodos)]));

    yield put(
      setModalAction({
        status: 'success',
        title: 'Задача изменена',
      }),
    );
  } catch (error) {
    console.error('error in updateTodoRequest', error.message);

    yield put(
      setModalAction({
        status: 'error',
        title: 'Произошла ошибка при редактировании',
      }),
    );
  }
}
