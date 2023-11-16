import { createSelector } from 'reselect';
import { TODO_REDUCER_NAME } from './_constants';
import { TTodoState, TTodoStatePart } from './_types';
import { initialState } from './reducer';

const todoSelector = (store: TTodoStatePart) =>
  store[TODO_REDUCER_NAME] || initialState;

export const todoIsLoadingSelector = createSelector(
  [todoSelector],
  ({ isLoading }: TTodoState) => isLoading,
);

export const todoIsLoadingFormSelector = createSelector(
  [todoSelector],
  ({ isLoadingForm }: TTodoState) => isLoadingForm,
);

export const todoTodosSelector = createSelector(
  [todoSelector],
  ({ todos }: TTodoState) => todos,
);
