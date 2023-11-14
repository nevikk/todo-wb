import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import {
  ReduxStoreLoader,
  injectAsyncReducer,
} from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
} from '@/_redux/ui-module';
import { Page } from './page';
import { storeInjectConfig } from './store-inject-config';

const pageNode = 'todo';

const action = async ({ store }) => {
  injectAsyncReducer({
    store,
    name: reducerUIName,
    reducer: reducerUI,
  });

  return {
    title: 'Todo',
    content: (
      <AppLayout>
        <ReduxStoreLoader storeInjectConfig={storeInjectConfig}>
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                return <Page />;
              }

              return content;
            }}
          </RouteNode>
        </ReduxStoreLoader>
      </AppLayout>
    ),
  };
};

export default action;
