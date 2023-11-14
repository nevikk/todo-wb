const express = require('express');
const {
  deleteTodoFromTodosController,
  todosGetController,
  addTodoToListController,
  updateTodoController,
} = require('../../controllers/todos');

const todosRouter = express.Router();

todosRouter.get('/', todosGetController);
todosRouter.post('/createTodo', addTodoToListController);
todosRouter.post('/deleteTodo', deleteTodoFromTodosController);
todosRouter.post('/updateTodo', updateTodoController);

module.exports.todosRouter = todosRouter;
