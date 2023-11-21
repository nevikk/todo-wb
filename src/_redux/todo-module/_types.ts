import { TODO_REDUCER_NAME } from './_constants';

export type TTodo = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export type TIdToDelete = Pick<TTodo, 'id'>;

export type TCreateTodoForm = {
  title: string;
  description: string;
};

export type TUpdateTodo = {
  id: number;
  title: string;
  description: string;
};

export type TFormattedUpdateTodo = {
  id: number;
  title?: string;
  description?: string;
};

export type TTodoState = {
  isLoading: boolean;
  isLoadingForm: boolean;
  todos: Array<TTodo>;
};

export type TTodoStatePart = {
  [TODO_REDUCER_NAME]: TTodoState;
};
