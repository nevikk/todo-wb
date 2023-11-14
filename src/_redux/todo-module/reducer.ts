import { TTodoState } from './_types';
import {
  getTodosSuccessAction,
  setTodosIsLoadingStartAction,
  setTodosIsLoadingStopAction,
} from './actions';

type TAction =
  | ReturnType<typeof setTodosIsLoadingStartAction>
  | ReturnType<typeof setTodosIsLoadingStopAction>
  | ReturnType<typeof getTodosSuccessAction>;

export const initialState: TTodoState = {
  isLoading: false,
  todos: [],
};

const reducer = (state: TTodoState = initialState, action: TAction) => {
  switch (action.type) {
    case setTodosIsLoadingStartAction.type:
      return { ...state, isLoading: true };
    case setTodosIsLoadingStopAction.type:
      return { ...state, isLoading: false };
    case getTodosSuccessAction.type:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default reducer;
