import React, {useState} from 'react'

export default function Todo({todo , deleteTodo, updateTodo }) {

    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(todo.title) 
    
    let updatetodoHandler = (e) => {
        e.preventDefault()

        let UpdatedTodo = {
            id : todo.id,
            title,
            complete : todo.complete,
        }
            updateTodo(UpdatedTodo)
    }

    let handlerCheckBox = () => {
        let UpdatedTodo = {
            id : todo.id,
            title,
            complete : !todo.complete,
        }
        updateTodo(UpdatedTodo)
    }

    return (
        <li className="todo-item-container">
            <div className="todo-item">
                <input type="checkbox" checked={todo.complete} onChange={handlerCheckBox}/>
                { !isEdit &&
                    <span onDoubleClick={()=> setIsEdit(true)} className={`todo-item-label ${todo.complete} ? 'line-through' : '' `}>
                {todo.title}
                </span> }
                { isEdit &&
                    <form onSubmit={updatetodoHandler}>
                        <input type="text" className="todo-item-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </form>
                     }
            </div>
            <button className="x-button" onClick={() => deleteTodo(todo.id)}>
                <svg
                    className="x-button-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </li>
    )
}
