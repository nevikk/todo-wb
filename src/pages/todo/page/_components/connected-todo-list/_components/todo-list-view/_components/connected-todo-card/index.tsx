import { connect } from 'react-redux';
import {
  TTodo,
  deleteTodoActionSaga,
  updateTodoActionSaga,
} from '@/_redux/todo-module';
import { TodoCardView } from './_components/todo-card-view/index';

type TExternalProps = {
  todo: TTodo;
};

type TMapDispatch = {
  deleteTodo: typeof deleteTodoActionSaga;
  updateTodo: typeof updateTodoActionSaga;
};

type TProps = TMapDispatch & TExternalProps;

const WrappedContainer = ({ todo, deleteTodo, updateTodo }: TProps) => {
  return (
    <TodoCardView onDelete={deleteTodo} onUpdate={updateTodo} todo={todo} />
  );
};

const mapDispatchToProps: TMapDispatch = {
  deleteTodo: deleteTodoActionSaga,
  updateTodo: updateTodoActionSaga,
};

export const ConnectedTodoCard = connect(
  null,
  mapDispatchToProps,
)(WrappedContainer);
