# todo-list-challenge-server
Todo list challenge server in Express js and Mongo db

The Todo-list-challenge-server is the server support to the Todo-list-challenge-client [client](https://github.com/MichaelKasingye/todo-listlchallenge-client) to view site.

### End points
These end points carry out these functions.
1. GET- https://sprintug-challenge.herokuapp.com/api/v1/todos/ - Fetch all todos.
2. Delete- https://sprintug-challenge.herokuapp.com/api/v1/todos/(id)  - Delete a todo
3. PUT- https://sprintug-challenge.herokuapp.com/api/v1/todos/(id)- change todo status
  ```json
  {
      "status":true
  }
  ```
4. POST- https://sprintug-challenge.herokuapp.com/api/v1/todos/ - Post a todo
  ```json
   {
           "name": "Buy a house",
   }
  ```
  
  Thank you
