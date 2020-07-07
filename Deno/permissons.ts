const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((rsp) => rsp.json());

console.log(todo);
