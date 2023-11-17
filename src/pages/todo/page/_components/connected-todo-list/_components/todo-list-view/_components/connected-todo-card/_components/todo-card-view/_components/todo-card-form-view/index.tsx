import {
  ButtonInterface,
  ButtonPrimary,
  FormSimpleInput,
} from '@wildberries/ui-kit';
import { memo } from 'react';
import { Field, Form } from 'react-final-form';
import classNames from 'classnames/bind';
import { isRequiredValidator } from '@/pages/todo/validators';
import { TUpdateTodo } from '@/_redux/todo-module';
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
                  label="Название задачи"
                  name="title"
                  placeholder="Введите название задачи"
                  required
                  validate={isRequiredValidator}
                />
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  initialValue={description}
                  label="Описание задачи"
                  name="description"
                  placeholder="Введите описание задачи"
                  required
                  validate={isRequiredValidator}
                />
                <div className={cn(`${BLOCK_NAME}__btns`)}>
                  <ButtonPrimary
                    disabled={!valid || pristine}
                    htmlType="submit"
                    text="Сохранить"
                  />
                  <ButtonInterface
                    modifier="danger"
                    onClick={onCancel}
                    text="Отмена"
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
