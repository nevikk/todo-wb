/* eslint-disable no-magic-numbers */
// eslint-disable-next-line
const { uniqueId } = require('lodash');
const { todosModel } = require('../../models/todos');

const todosGetController = async (req, res) => {
  const todos = await todosModel.get();

  res.status(200).json({
    jsonrpc: '2.0',
    result: {
      todos,
      //   todos: [
      //     {
      //       id: '1',
      //       date: '01.10.2015',
      //       title: 'Первая задача',
      //       description: 'Lorem ipsum dolor sit amet.',
      //     },
      //     {
      //       id: '2',
      //       date: '01.10.2015',
      //       title: 'Вторая задача',
      //       description:
      //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellat ex perspiciatis accusantium non cumque quaerat, ullam enim laboriosam dicta suscipit, amet veniam rerum fugiat?',
      //     },
      //     {
      //       id: '3',
      //       date: '01.10.2015',
      //       title: 'Третья задача',
      //       description: 'Сделать описание Сделать описание Сделать описание',
      //     },
      //     {
      //       id: '4',
      //       date: '01.10.2015',
      //       title: 'Ещё одна задача',
      //       description: 'Сделать описание',
      //     },
      //   ],
    },
  });
};

const deleteTodoFromTodosController = async (req, res) => {
  const { id } = req.body;

  await todosModel.remove({ id }).write();

  res.status(200).json({
    jsonrpc: '2.0',
    result: {},
    id,
  });
};

const addTodoToListController = async (req, res) => {
  const { title, description } = req.body;

  const newTodoId = uniqueId();

  const formattedTodo = {
    id: newTodoId,
    created: new Date().toISOString(),
    title,
    description,
  };

  await todosModel.get().push(formattedTodo).write();

  res.status(200).json({
    jsonrpc: '2.0',
    result: {
      id: newTodoId,
    },
  });
};

module.exports = {
  deleteTodoFromTodosController,
  todosGetController,
  addTodoToListController,
};
