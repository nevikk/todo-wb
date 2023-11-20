import { ButtonPrimary, FormSimpleInput } from '@wildberries/ui-kit';
import { memo } from 'react';
import { Field, Form } from 'react-final-form';
import { FormApi } from 'final-form';
import classNames from 'classnames/bind';
import i18next from 'i18next';
import { isRequiredValidator } from '@/pages/todo/validators';
import { TCreateTodoForm } from '@/_redux/todo-module';
import { TODO_PAGE_TRANSLATES } from '@/pages/todo/_constants/translation';
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
      <>
        <Form
          onSubmit={onCreateTodo}
          render={({ handleSubmit, valid }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  label={i18next.t(TODO_PAGE_TRANSLATES.todoTitleLabel)}
                  name="title"
                  placeholder={i18next.t(
                    TODO_PAGE_TRANSLATES.todoTitlePlaceholder,
                  )}
                  required
                  validate={isRequiredValidator}
                />
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  label={i18next.t(TODO_PAGE_TRANSLATES.todoDescriptionLabel)}
                  name="description"
                  placeholder={i18next.t(
                    TODO_PAGE_TRANSLATES.todoDescriptionPlaceholder,
                  )}
                  required
                  validate={isRequiredValidator}
                />
                <div className={cn(`${BLOCK_NAME}__submit-btn`)}>
                  <ButtonPrimary
                    disabled={!valid}
                    htmlType="submit"
                    loading={isLoadingForm}
                    text={i18next.t(TODO_PAGE_TRANSLATES.createTodoBtnText)}
                  />
                </div>
              </form>
            );
          }}
        />
      </>
    );
  },
);
