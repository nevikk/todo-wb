import classNames from 'classnames/bind';
import { memo } from 'react';
import { Preloader } from '@wildberries/ui-kit';
import { TTodo } from '@/pages/todo/page/_types';
import { TodoCard } from './todo-card';
import { TodoCreate } from './todo-create';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const BLOCK_NAME = 'Todo-list-view';

type TProps = {
  isLoading: boolean;
  todoList: Array<TTodo>;
};

export const TodoListView = memo(({ isLoading, todoList }: TProps) => {
  if (isLoading) {
    return (
      <div className={cn(`${BLOCK_NAME}`)}>
        <Preloader size="medium" />
      </div>
    );
  }

  return (
    <div className={cn(`${BLOCK_NAME}`)}>
      <div className={cn(`${BLOCK_NAME}__create-wrapper`)}>
        <TodoCreate />
      </div>
      <div className={cn(`${BLOCK_NAME}__list`)}>
        {todoList.map((todo: TTodo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
});
