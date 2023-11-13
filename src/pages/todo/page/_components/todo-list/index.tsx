import { todoList } from '../../_constants';
import { TodoListView } from './_components/todo-list-view';

export const ConnectedTodoList = () => {
  return <TodoListView isLoading={false} todoList={todoList} />;
};
