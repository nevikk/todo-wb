import { TFormattedUpdateTodo, TUpdateTodo } from '@/_redux/todo-module';

export const formatDataToUpdateTodo = (
  { id, title, description }: TUpdateTodo,
  { title: prevTitle, description: prevDescription }: TUpdateTodo,
): TFormattedUpdateTodo => {
  const result: TFormattedUpdateTodo = {
    id,
  };

  if (title !== prevTitle) {
    result.title = title;
  }

  if (description !== prevDescription) {
    result.description = description;
  }

  return result;
};
