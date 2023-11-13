import { todoList } from '../../_constants';
import { TodoListView } from './_components/todo-list-view';

export const TodoList = () => {
  return <TodoListView isLoading={false} todoList={todoList} />;
};
