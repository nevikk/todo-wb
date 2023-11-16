import { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { FormApi } from 'final-form';
import {
  TCreateTodoForm,
  TTodoStatePart,
  todoIsLoadingFormSelector,
} from '@/_redux/todo-module';
import { getCreateTodoConfigList } from '@/pages/todo/_utils/store-inject-configs/get-create-todo-request-config-list';
import { TodoCreateView } from './_components/todo-create-view';

type TMapStateOutput = {
  isLoadingForm: boolean;
};

type TMapDispatch = {
  fetchFormManager: typeof fetchFormManagerSagaAction;
};

type TProps = TMapStateOutput & TMapDispatch;

const WrappedContainer = memo(({ isLoadingForm, fetchFormManager }: TProps) => {
  const createTodoHandler = useCallback(
    (data: TCreateTodoForm, form: FormApi<TCreateTodoForm>) => {
      const successCallback = form.reset;
      fetchFormManager(getCreateTodoConfigList({ data, successCallback }));
    },
    [fetchFormManager],
  );

  return (
    <TodoCreateView
      isLoadingForm={isLoadingForm}
      onCreateTodo={createTodoHandler}
    />
  );
});

const mapStateToProps = (state: TTodoStatePart): TMapStateOutput => ({
  isLoadingForm: todoIsLoadingFormSelector(state),
});

const mapDispatchToProps: TMapDispatch = {
  fetchFormManager: fetchFormManagerSagaAction,
};

export const ConnectedTodoCreate = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
