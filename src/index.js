import { createTodoItem } from "./todo.js";

const testTodo = createTodoItem('Test title', 'This is a description', 
'Mock due date', 'High');

function test() {
    console.table(testTodo);
    testTodo.editItem('title', 'New title');
    console.table(testTodo);
}

test();