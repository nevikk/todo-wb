import { ButtonPrimary, FormSimpleInput } from '@wildberries/ui-kit';
import { memo } from 'react';
import { Field, Form } from 'react-final-form';
import { FormApi } from 'final-form';
import classNames from 'classnames/bind';
import { isRequiredValidator } from '@/pages/todo/validators';
import { TCreateTodoForm } from '@/_redux/todo-module';
import styles from './index.module.scss';

type TProps = {
  isLoadingForm: boolean;
  onCreateTodo: (data: TCreateTodoForm, form: FormApi<TCreateTodoForm>) => void;
};

const cn = classNames.bind(styles);

const BLOCK_NAME = 'Todo-create-view';

export const TodoCreateView = memo(
  ({ isLoadingForm, onCreateTodo }: TProps) => {
    return (
      <div className={cn(BLOCK_NAME)}>
        <Form
          onSubmit={onCreateTodo}
          render={({ handleSubmit, valid }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  label="Название задачи"
                  name="title"
                  placeholder="Введите название задачи"
                  required
                  validate={isRequiredValidator}
                />
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  label="Описание задачи"
                  name="description"
                  placeholder="Введите описание задачи"
                  required
                  validate={isRequiredValidator}
                />
                <div className={cn(`${BLOCK_NAME}__submit-btn`)}>
                  <ButtonPrimary
                    disabled={!valid}
                    htmlType="submit"
                    loading={isLoadingForm}
                    text="Создать задачу"
                  />
                </div>
              </form>
            );
          }}
        />
      </div>
    );
  },
);
