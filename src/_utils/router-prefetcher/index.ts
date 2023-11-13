/* eslint-disable import/no-unused-modules */
import { Router } from 'router5';
import { findRouteObject } from './_utils/find-route-object';

type TParams = {
  routeName: string;
  router: Router;
};

export const routerPrefetcher = ({ router, routeName }: TParams) => {
  const { routes } = router.getDependencies();

  const routeObject = findRouteObject({ routes, routeName });

  if (routeObject && routeObject.loadAction) {
    routeObject.loadAction();
  }
};
