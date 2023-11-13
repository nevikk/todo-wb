import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Card } from './_components/card';
import { Header } from './_components/header';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Home-page';

export const Page = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="home-page">
    <Header />
    <div className={cn(`${BLOCK_NAME}__card-wrapper`)}>
      <Card />
    </div>
  </div>
));
