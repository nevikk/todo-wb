const express = require('express');
const {
  deleteTodoFromTodosController,
  todosGetController,
  addTodoToListController,
} = require('../../controllers/todos');

const todosRouter = express.Router();

todosRouter.get('/', todosGetController);
todosRouter.post('/createTodo', addTodoToListController);
todosRouter.post('/deleteTodo', deleteTodoFromTodosController);

module.exports.todosRouter = todosRouter;
