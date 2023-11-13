/* eslint-disable no-magic-numbers */
// eslint-disable-next-line
const { uniqueId } = require('lodash');
const { todosModel } = require('../../models/todos');

const todosGetController = async (req, res) => {
  const todos = await todosModel.value();

  res.status(200).json({
    jsonrpc: '2.0',
    error: false,
    result: {
      todos,
    },
  });
};

const deleteTodoFromTodosController = async (req, res) => {
  const { id } = req.body;

  const todoList = await todosModel.value();

  const findTodo = todoList.find((todo) => todo.id === id);

  if (!findTodo) {
    res.status(200).json({
      error: {
        code: 404,
        message: 'todo not found',
      },
      result: {},
    });
  }

  await todosModel.remove({ id }).write();

  res.status(200).json({
    jsonrpc: '2.0',
    error: false,
    result: {},
    id,
  });
};

const addTodoToListController = async (req, res) => {
  const { title = '', description = '' } = req.body;

  const newTodoId = uniqueId();

  const formattedTodo = {
    id: newTodoId,
    created: new Date().toISOString(),
    title,
    description,
  };

  await todosModel.push(formattedTodo).write();

  res.status(200).json({
    jsonrpc: '2.0',
    error: false,
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
