import 'fast-text-encoding/text';
/* 
    if you need some polyfills and you are not in "rus" or "euro" version
    please insert below (package is included)
    import 'react-app-polyfill/stable';
*/
import 'reset-css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  geti18Next,
  getLocale,
  getI18nextRequestEndpoint,
} from '@wildberries/i18next-utils';
import i18next from 'i18next';
import { createAppStore } from '@mihanizm56/redux-core-modules';
import { configureRouter } from '@wildberries/service-router';
import { ABORT_REQUEST_EVENT_NAME } from '@mihanizm56/fetch-api';
import { Provider } from 'react-redux';
import {
  notificationsState,
  NOTIFICATIONS_REDUCER_NAME,
  setModalAction,
} from '@wildberries/notifications';
import {
  confirmModalModuleReducer,
  confirmModalWatcherSaga,
  CONFIRM_MODALS_REDUCER_NAME,
  CONFIRM_MODAL_SAGA_NAME,
} from '@wildberries/confirm-modal-portal';
import { App } from '@/_components/app';
import { routes } from '@/pages/routes';
import { APP_NAMESPACE } from './_constants/i18next/app-namespace';
import {
  starti18nextLoadingAction,
  stopi18nextLoadingAction,
} from './_redux/ui-module';
import { i18nextRequest } from './api/requests/i18next';
import 'normalize.css';
import '@/styles/global.css';
import '@/styles/variables.module.scss';
import { I18N_DICTIONARY } from './_assets/i18next/dictionary';

// const ROOT_ELEMENT = document.getElementById('root');

const router = configureRouter({
  defaultRoute: 'todo',
  eventNameToCancelRequests: ABORT_REQUEST_EVENT_NAME,
  // uncomment if you need envs from window (for example for request endpoints)
  // enableWindowEnvsMiddleware: true,
  enablei18nMiddleware: true,
});

const store = createAppStore({
  router,
  eventNameToCancelRequests: ABORT_REQUEST_EVENT_NAME,
  rootReducers: {
    [NOTIFICATIONS_REDUCER_NAME]: notificationsState,
    [CONFIRM_MODALS_REDUCER_NAME]: confirmModalModuleReducer,
  },
  rootSagas: {
    [CONFIRM_MODAL_SAGA_NAME]: confirmModalWatcherSaga,
  },
  dependencies: { setModalAction },
});

const i18nextConfig = {
  getLocale: () => getLocale({ isFromCookie: true }),
  i18next,
  i18nextRequest,
  actionToStartLoading: starti18nextLoadingAction,
  actionToStopLoading: stopi18nextLoadingAction,
  createEndpoint: getI18nextRequestEndpoint,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatterResponseData: (data: Record<string, any>) => data.translate,
};

router.setDependencies({
  store,
  routes,
  i18nextConfig,
});

router.add(routes);

const root = createRoot(document.getElementById('root'));

const initialLocale = getLocale({ isFromCookie: true });

geti18Next({
  appNamespace: APP_NAMESPACE,
  locale: initialLocale,
}).then(() => {
  if (
    process.env.NODE_ENV === 'development' &&
    navigator.userAgent.includes('Windows')
  ) {
    i18next.addResourceBundle(
      initialLocale,
      APP_NAMESPACE,
      I18N_DICTIONARY[initialLocale],
    );
  }

  router.start(() => {
    root.render(
      <Provider store={store}>
        <App router={router} />
      </Provider>,
    );
  });
});
