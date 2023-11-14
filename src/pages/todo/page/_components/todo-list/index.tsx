import { connect } from 'react-redux';
import {
  TTodo,
  TTodoStatePart,
  todoIsLoadingSelector,
  todoTodosSelector,
} from '@/_redux/todo-module';
import { TodoListView } from './_components/todo-list-view';

type TMapStateOutput = {
  isLoading: boolean;
  todos: Array<TTodo>;
};

type TProps = TMapStateOutput;

const WrappedContainer = ({ isLoading, todos }: TProps) => {
  return <TodoListView isLoading={isLoading} todoList={todos} />;
};

const mapStateToProps = (state: TTodoStatePart): TMapStateOutput => ({
  isLoading: todoIsLoadingSelector(state),
  todos: todoTodosSelector(state),
});

export const ConnectedTodoList = connect(
  mapStateToProps,
  null,
)(WrappedContainer);
