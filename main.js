const { strict } = require('assert');
const readline = require('readline');
const data = require('./data.js')

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;

const todos = data.todos

const toList = function(item) {
  todos.push({
    text: '',
    priority: 2,
    isComplete: false,
  })
}  

const todoList = function(todo) {
  console.log('Here are your todos:')
    for (const todo of todos) {
      console.log('* ' + todo.text + ' ' + todo.isComplete + ' ' + todo.priority)
  }
}
todoList()

const handleMenu = function(cmd) {
  if(cmd === '1' || cmd === '2' || cmd === '3' || cmd === '4' || cmd === '5') {
    console.clear()
    interface.question('What should go on your list?\n', toList)
  }
  else if (cmd === '6') {
    console.log('Quitting!')
    interface.close();
  } else {
    console.clear();
    console.log('Type 6 to quit!');
    interface.question(menu, handleMenu);
  }
};

console.clear()
todoList()
interface.question(menu, handleMenu)