import { ENDPOINT_TODOS_DEV, ENDPOINT_TODOS_PROD } from '@/api/endpoints/url';

export const deleteTodoEndpoint = (): string =>
  process.env.NODE_ENV !== 'production'
    ? `${ENDPOINT_TODOS_DEV}/deleteTodo`
    : `${ENDPOINT_TODOS_PROD}/deleteTodo`;
