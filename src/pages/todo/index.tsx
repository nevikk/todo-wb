import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import {
  ReduxStoreLoader,
  injectAsyncReducer,
} from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { AppLayout } from '@/_layouts/app-layout';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
} from '@/_redux/ui-module';
import { Page } from './page';
import { storeInjectConfig } from './store-inject-config';
import { TODO_PAGE_TRANSLATES } from './_constants/translation';

const pageNode = 'todo';

const action = async ({ store }) => {
  injectAsyncReducer({
    store,
    name: reducerUIName,
    reducer: reducerUI,
  });

  return {
    title: i18next.t(TODO_PAGE_TRANSLATES.pageTitle),
    content: (
      <AppLayout>
        <ReduxStoreLoader storeInjectConfig={storeInjectConfig}>
          <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>
        </ReduxStoreLoader>
      </AppLayout>
    ),
  };
};

export default action;
