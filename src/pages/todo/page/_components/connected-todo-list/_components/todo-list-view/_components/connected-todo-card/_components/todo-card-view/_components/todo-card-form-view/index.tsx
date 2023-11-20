import {
  ButtonInterface,
  ButtonPrimary,
  FormSimpleInput,
} from '@wildberries/ui-kit';
import { memo } from 'react';
import { Field, Form } from 'react-final-form';
import classNames from 'classnames/bind';
import i18next from 'i18next';
import { isRequiredValidator } from '@/pages/todo/validators';
import { TUpdateTodo } from '@/_redux/todo-module';
import { TODO_PAGE_TRANSLATES } from '@/pages/todo/_constants/translation';
import styles from './index.module.scss';

type TProps = {
  onCancel: () => void;
  onSubmit: (data: TUpdateTodo) => void;
  title: string;
  description: string;
};

const cn = classNames.bind(styles);

const BLOCK_NAME = 'Todo-card-form-view';

export const TodoCardFormView = memo(
  ({ onCancel, title, description, onSubmit }: TProps) => {
    return (
      <>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, valid, pristine }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  initialValue={title}
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
                  initialValue={description}
                  label={i18next.t(TODO_PAGE_TRANSLATES.todoDescriptionLabel)}
                  name="description"
                  placeholder={i18next.t(
                    TODO_PAGE_TRANSLATES.todoDescriptionPlaceholder,
                  )}
                  required
                  validate={isRequiredValidator}
                />
                <div className={cn(`${BLOCK_NAME}__btns`)}>
                  <ButtonPrimary
                    disabled={!valid || pristine}
                    htmlType="submit"
                    text={i18next.t(TODO_PAGE_TRANSLATES.submitEditTodoBtnText)}
                  />
                  <ButtonInterface
                    modifier="danger"
                    onClick={onCancel}
                    text={i18next.t(TODO_PAGE_TRANSLATES.cancelEditTodoBtnText)}
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
