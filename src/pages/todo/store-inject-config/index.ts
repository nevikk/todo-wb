import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import uiReducer, { MODULE_REDUCER_NAME } from '@/_redux/ui-module';
import todoReducer, { TODO_REDUCER_NAME } from '@/_redux/todo-module';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: MODULE_REDUCER_NAME,
      reducer: uiReducer,
    },
    {
      name: TODO_REDUCER_NAME,
      reducer: todoReducer,
    },
  ],
};
