import { TODO_REDUCER_NAME } from './_constants';

export type TTodo = {
  id: number;
  title: string;
  description: string;
  created: string;
};

export type TTodoState = {
  isLoading: boolean;
  todos: Array<TTodo>;
};

export type TTodoStatePart = {
  [TODO_REDUCER_NAME]: TTodoState;
};
