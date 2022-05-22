import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todo.css'
const Todo = (props) => {

  const todoSaveHandler = (prevData) => {
    const todoData = {
      ...prevData,
      id : Math.random().toString()
    }
    console.log(todoData)
    props.onAddTodo(todoData)
  }


  return (
    <div className='Todo-container'>
        <TodoForm onSaveTodo={todoSaveHandler} />
        {props.items.map((data) =>
        <TodoList 
         key={data.id}
        text={data.text}/>
        )}
    </div>
  )
}

export default Todo