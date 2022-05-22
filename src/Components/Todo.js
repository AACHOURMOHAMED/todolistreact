import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todo.css'
const Todo = () => {

  const todoSaveHandler = (prevData) => {
    const todoData = {
      ...prevData,
      id : Math.random().toString()
    }
    console.log(todoData)
  }


  return (
    <div className='Todo-container'>
        <TodoForm onSaveTodo={todoSaveHandler} />
        <TodoList/>
    </div>
  )
}

export default Todo