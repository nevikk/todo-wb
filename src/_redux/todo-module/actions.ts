import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { TIdToDelete, TTodo, TUpdateTodo } from './_types';

const SET_TODOS_IS_LOADING_START = 'SET_TODOS_IS_LOADING_START';
export const setTodosIsLoadingStartAction: IReduxBaseAction<
  typeof SET_TODOS_IS_LOADING_START
> = () => ({
  type: SET_TODOS_IS_LOADING_START,
});
setTodosIsLoadingStartAction.type = SET_TODOS_IS_LOADING_START;

const SET_TODOS_IS_LOADING_STOP = 'SET_TODOS_IS_LOADING_STOP';
export const setTodosIsLoadingStopAction: IReduxBaseAction<
  typeof SET_TODOS_IS_LOADING_STOP
> = () => ({
  type: SET_TODOS_IS_LOADING_STOP,
});
setTodosIsLoadingStopAction.type = SET_TODOS_IS_LOADING_STOP;

const SET_TODOS = 'SET_TODOS';
export const setTodosAction: IReduxAction<Array<TTodo>, typeof SET_TODOS> = (
  payload,
) => ({
  type: SET_TODOS,
  payload,
});
setTodosAction.type = SET_TODOS;

const SET_TODOS_IS_LOADING_FORM_START = 'SET_TODOS_IS_LOADING_FORM_START';
export const setTodosIsLoadingFormStartAction: IReduxBaseAction<
  typeof SET_TODOS_IS_LOADING_FORM_START
> = () => ({
  type: SET_TODOS_IS_LOADING_FORM_START,
});
setTodosIsLoadingFormStartAction.type = SET_TODOS_IS_LOADING_FORM_START;

const SET_TODOS_IS_LOADING_FORM_STOP = 'SET_TODOS_IS_LOADING_FORM_STOP';
export const setTodosIsLoadingFormStopAction: IReduxBaseAction<
  typeof SET_TODOS_IS_LOADING_FORM_STOP
> = () => ({
  type: SET_TODOS_IS_LOADING_FORM_STOP,
});
setTodosIsLoadingFormStopAction.type = SET_TODOS_IS_LOADING_FORM_STOP;

const DELETE_TODO = 'DELETE_TODO';
export const deleteTodoActionSaga: IReduxAction<
  TIdToDelete,
  typeof DELETE_TODO
> = (payload) => ({
  type: DELETE_TODO,
  payload,
});
deleteTodoActionSaga.type = DELETE_TODO;

const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodoActionSaga: IReduxAction<
  TUpdateTodo,
  typeof UPDATE_TODO
> = (payload) => ({
  type: UPDATE_TODO,
  payload,
});
updateTodoActionSaga.type = UPDATE_TODO;
