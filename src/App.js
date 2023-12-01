import './reset.css';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckallAndRemaining from "./components/CheckallAndRemaining";
import FilterBtn from "./components/FilterBtn";
import ClearBtn from "./components/ClearBtn";
import {useEffect, useState} from "react";





function App() {

    let [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/todos')
            .then(res => res.json())
            .then(todos => {
                setTodos(todos)
            })
    }, []);

   let addTodo = (todo) => {

       // update data at server side Post Method
       fetch('http://localhost:3001/todos',{
           method : "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify(todo),
       });

       // update data at Client side

       setTodos((prevState) => [...prevState, todo])
   }



  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

       <TodoForm addTodo={addTodo}/>
        <TodoList todos = {todos}/>
       <CheckallAndRemaining/>
        <div className="other-buttons-container">
         <FilterBtn/>
         <ClearBtn/>

        </div>
      </div>
    </div>
  );
}

export default App;
