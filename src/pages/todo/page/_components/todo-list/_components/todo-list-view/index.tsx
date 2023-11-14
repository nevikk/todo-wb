import classNames from 'classnames/bind';
import { memo } from 'react';
import { Preloader, Text } from '@wildberries/ui-kit';
import { TTodo } from '@/_redux/todo-module';
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
  return (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__create-wrapper`)}>
        <TodoCreate />
      </div>
      {isLoading && (
        <div className={cn(`${BLOCK_NAME}__loader`)}>
          <Preloader size="medium" />
        </div>
      )}
      <div className={cn(`${BLOCK_NAME}__list`)}>
        {todoList.length > 0 ? (
          todoList.map((todo: TTodo) => <TodoCard key={todo.id} todo={todo} />)
        ) : (
          <Text text="Задач не создано" />
        )}
      </div>
    </div>
  );
});
