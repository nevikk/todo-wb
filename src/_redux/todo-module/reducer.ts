import { TTodoState } from './_types';
import {
  setTodosAction,
  setTodosIsLoadingFormStartAction,
  setTodosIsLoadingFormStopAction,
  setTodosIsLoadingStartAction,
  setTodosIsLoadingStopAction,
} from './actions';

type TAction =
  | ReturnType<typeof setTodosIsLoadingStartAction>
  | ReturnType<typeof setTodosIsLoadingStopAction>
  | ReturnType<typeof setTodosAction>
  | ReturnType<typeof setTodosIsLoadingFormStartAction>
  | ReturnType<typeof setTodosIsLoadingFormStopAction>;

export const initialState: TTodoState = {
  isLoading: false,
  isLoadingForm: false,
  todos: [],
};

const reducer = (
  state: TTodoState = initialState,
  action: TAction,
): TTodoState => {
  switch (action.type) {
    case setTodosIsLoadingStartAction.type:
      return { ...state, isLoading: true };
    case setTodosIsLoadingStopAction.type:
      return { ...state, isLoading: false };
    case setTodosAction.type:
      return { ...state, todos: action.payload };
    case setTodosIsLoadingFormStartAction.type:
      return { ...state, isLoadingForm: true };
    case setTodosIsLoadingFormStopAction.type:
      return { ...state, isLoadingForm: false };

    default:
      return state;
  }
};

export default reducer;
