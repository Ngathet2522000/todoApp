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


   let deleteTodo = (todoID) => {

       // update data at Server side
       fetch(`http://localhost:3001/todos/${todoID}`,{
           method : "DELETE"
       })

       // update data at Client side
       setTodos(prevState => {
           return prevState.filter(todo  => {
               return todo.id !== todoID
           })
       })
   }

   let updateTodo = (todo) => {

       // update data at Server side

       fetch(`http://localhost:3001/todos/${todo.id}`,{
           method : "PATCH",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify(todo),
       });

       // update data at Client side

       setTodos(prevState => {
           return prevState.map(t  => {
               if(t.id === todo.id){
                   return todo
               }return t
           })
       })
   }

   let chechAll = () => {

       todos.forEach(t => {
           t.complete = true
           updateTodo(t)
       })


       setTodos(prevState => {
           return prevState.map(t => {
               return {...t, complete : true}
           })
       })
   }

   let remainCount = todos.filter(t => !t.complete).length

    let clearComplete = () => {

        todos.forEach(t => {
            if(t.complete){
                deleteTodo(t.id)
            }
        })

       setTodos(prevState => {
           return prevState.filter((t => !t.complete))
       })
    }


  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

       <TodoForm addTodo={addTodo}/>
        <TodoList todos = {todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
       <CheckallAndRemaining remainCount={remainCount} chechAll={chechAll}/>
        <div className="other-buttons-container">
         <FilterBtn/>
         <ClearBtn clearComplete={clearComplete}/>

        </div>
      </div>
    </div>
  );
}

export default App;
