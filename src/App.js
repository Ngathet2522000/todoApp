import './reset.css';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckallAndRemaining from "./components/CheckallAndRemaining";
import FilterBtn from "./components/FilterBtn";
import ClearBtn from "./components/ClearBtn";


function App() {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>


       <TodoForm/>


        <TodoList/>

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
