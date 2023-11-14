const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const dataJSONFilePath = path.join('server', 'models', 'todos', 'data.json');
const adapter = new FileSync(dataJSONFilePath);
const database = low(adapter);

database
  .defaults({
    todos: [
      {
        id: '1',
        date: '01.10.2015',
        title: 'Первая задача',
        description: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: '2',
        date: '01.10.2015',
        title: 'Вторая задача',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellat ex perspiciatis accusantium non cumque quaerat, ullam enim laboriosam dicta suscipit, amet veniam rerum fugiat?',
      },
      {
        id: '3',
        date: '01.10.2015',
        title: 'Третья задача',
        description: 'Сделать описание Сделать описание Сделать описание',
      },
      {
        id: '4',
        date: '01.10.2015',
        title: 'Ещё одна задача',
        description: 'Сделать описание',
      },
    ],
  })
  .write();

module.exports.todosModel = database.get('todos');
