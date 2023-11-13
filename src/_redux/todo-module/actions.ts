import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { TTodo } from './_types';

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

const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const getTodosSuccessAction: IReduxAction<
  Array<TTodo>,
  typeof GET_TODOS_SUCCESS
> = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload,
});
getTodosSuccessAction.type = GET_TODOS_SUCCESS;
