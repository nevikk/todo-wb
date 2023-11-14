import classNames from 'classnames/bind';
import { memo, useCallback, useMemo } from 'react';
import {
  Text,
  BasicCircleXIcon,
  ButtonPrimary,
  ButtonGhost,
} from '@wildberries/ui-kit';
import { getFormattedDate } from '@/_utils/date';
import { TTodo } from '@/pages/todo/page/_types';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const BLOCK_NAME = 'Todo-card';

type TProps = {
  todo: TTodo;
};

export const TodoCard = memo(
  ({ todo: { created, description, title } }: TProps) => {
    const RemoveIcon = useCallback(() => <BasicCircleXIcon />, []);

    const dateCreated = useMemo(() => getFormattedDate(created), [created]);

    return (
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__body`)}>
          <div className={cn(`${BLOCK_NAME}__header`)}>
            <div className={cn(`${BLOCK_NAME}__info`)}>
              <Text color="purple" text={title} />
              <Text color="darkPurple" text={dateCreated} />
            </div>
            <div className={cn(`${BLOCK_NAME}__remove-btn-wrapper`)}>
              <ButtonGhost leftIcon={RemoveIcon} size="s" />
            </div>
          </div>
          <div className={cn(`${BLOCK_NAME}__description`)}>
            <Text text={description} />
          </div>
          <ButtonPrimary size="s" text="Редактировать" />
        </div>
      </div>
    );
  },
);
