import classNames from 'classnames/bind';
import { memo } from 'react';
import { Preloader, Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { TTodo } from '@/_redux/todo-module';
import { TODO_PAGE_TRANSLATES } from '@/pages/todo/_constants/translation';
import { ConnectedTodoCreate } from './_components/connected-todo-create';
import { ConnectedTodoCard } from './_components/connected-todo-card';
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
        <ConnectedTodoCreate />
      </div>
      {isLoading ? (
        <div className={cn(`${BLOCK_NAME}__loader`)}>
          <Preloader size="medium" />
        </div>
      ) : (
        <div className={cn(`${BLOCK_NAME}__list`)}>
          {Boolean(todoList.length) ? (
            todoList.map((todo: TTodo) => (
              <ConnectedTodoCard key={todo.id} todo={todo} />
            ))
          ) : (
            <Text text={i18next.t(TODO_PAGE_TRANSLATES.emptyTodoList)} />
          )}
        </div>
      )}
    </div>
  );
});
