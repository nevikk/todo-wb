/* eslint-disable no-magic-numbers */
// eslint-disable-next-line
const { uniqueId } = require('lodash');
const { todosModel } = require('../../models/todos');

const todosGetController = async (req, res) => {
  const todos = await todosModel.value();

  res.status(200).json({
    error: false,
    errorText: '',
    additionalErrors: null,
    data: {
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
      errorText: '',
      data: {},
      additionalErrors: null,
    });
  }

  await todosModel.remove({ id }).write();

  res.status(200).json({
    error: false,
    errorText: '',
    additionalErrors: null,
    data: {
      id,
    },
  });
};

const addTodoToListController = async (req, res) => {
  const { title = '', description = '' } = req.body;

  const newTodoId = Number(uniqueId());

  const formattedTodo = {
    id: newTodoId,
    date: new Date().toISOString(),
    title,
    description,
  };

  await todosModel.push(formattedTodo).write();

  res.status(200).json({
    error: false,
    errorText: '',
    additionalErrors: null,
    data: {
      id: newTodoId,
    },
  });
};

const updateTodoController = async (req, res) => {
  const { title, description, id } = req.body;

  const todos = await todosModel.value();

  const findTodo = todos.find((todo) => todo.id === id);

  if (!findTodo) {
    res.status(200).json({
      error: {
        code: 404,
        message: 'todo not found',
      },
      data: {},
    });
  }

  await todosModel
    .find({ id: findTodo.id })
    .assign({ title, description })
    .write();

  res.status(200).json({
    error: false,
    errorText: '',
    additionalErrors: null,
    data: {
      id,
      title,
      description,
    },
  });
};

module.exports = {
  deleteTodoFromTodosController,
  todosGetController,
  addTodoToListController,
  updateTodoController,
};
