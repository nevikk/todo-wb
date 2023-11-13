import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Header } from './_components/header';
import { TodoList } from './_components/todo-list';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo';

export const Page = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="home-page">
    <Header />
    <div className={cn(`${BLOCK_NAME}__todo-wrapper`)}>
      <TodoList />
    </div>
  </div>
));
