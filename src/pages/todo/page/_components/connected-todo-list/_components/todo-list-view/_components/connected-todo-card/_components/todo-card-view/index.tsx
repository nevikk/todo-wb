import classNames from 'classnames/bind';
import { memo, useCallback, useMemo, useState } from 'react';
import {
  Text,
  BasicCircleXIcon,
  ButtonPrimary,
  ButtonGhost,
} from '@wildberries/ui-kit';
import i18next from 'i18next';
import { getFormattedDate } from '@/_utils/date';
import {
  TTodo,
  TUpdateTodo,
  deleteTodoActionSaga,
  updateTodoActionSaga,
} from '@/_redux/todo-module';
import { TODO_PAGE_TRANSLATES } from '@/pages/todo/_constants/translation';
import { TodoCardFormView } from './_components/todo-card-form-view';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const BLOCK_NAME = 'Todo-card-view';

type TProps = {
  todo: TTodo;
  onDelete: typeof deleteTodoActionSaga;
  onUpdate: typeof updateTodoActionSaga;
};

export const TodoCardView = memo(
  ({ todo: { date, description, title, id }, onDelete, onUpdate }: TProps) => {
    const [isEdit, setIsEdit] = useState(false);

    const RemoveIcon = useCallback(() => <BasicCircleXIcon />, []);

    const dateCreated = useMemo(() => getFormattedDate(date), [date]);

    const deleteClickHandler = useCallback(() => {
      onDelete({ id });
    }, [id, onDelete]);

    const toggleEditingHandler = useCallback(() => {
      setIsEdit(true);
    }, []);

    const cancelEditingHandler = useCallback(() => {
      setIsEdit(false);
    }, []);

    const submitEditingHandler = useCallback(
      (dataToUpdate: TUpdateTodo) => {
        onUpdate({ id, ...dataToUpdate });
        setIsEdit(false);
      },
      [onUpdate, id],
    );

    return (
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__body`)}>
          <div className={cn(`${BLOCK_NAME}__header`)}>
            <Text color="darkPurple" text={dateCreated} />
            <div className={cn(`${BLOCK_NAME}__remove-btn-wrapper`)}>
              <ButtonGhost
                leftIcon={RemoveIcon}
                onClick={deleteClickHandler}
                size="s"
              />
            </div>
          </div>
          {!isEdit ? (
            <>
              <div className={cn(`${BLOCK_NAME}__title`)}>
                <Text color="purple" text={title} />
              </div>
              <div className={cn(`${BLOCK_NAME}__description`)}>
                <Text text={description} />
              </div>
              <ButtonPrimary
                onClick={toggleEditingHandler}
                size="s"
                text={i18next.t(TODO_PAGE_TRANSLATES.editTodoBtnText)}
              />
            </>
          ) : (
            <TodoCardFormView
              description={description}
              onCancel={cancelEditingHandler}
              onSubmit={submitEditingHandler}
              title={title}
            />
          )}
        </div>
      </div>
    );
  },
);
