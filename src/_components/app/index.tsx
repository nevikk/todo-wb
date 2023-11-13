import React, { memo } from 'react';
import { RouteNode } from '@wildberries/service-router';
import { Router } from 'router5';
import { RouterProvider } from 'react-router5';
import { RootComponents } from '@/_components/root-components';

type TProps = {
  router: Router;
};

export const App = memo(({ router }: TProps) => (
  <>
    <RootComponents />
    <RouterProvider key={1} router={router}>
      <RouteNode nodeName="">{({ content }) => content}</RouteNode>
    </RouterProvider>
  </>
));
