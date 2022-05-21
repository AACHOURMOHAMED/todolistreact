import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todo.css'
const Todo = () => {
  return (
    <div className='Todo-container'>
        <TodoForm/>
        <TodoList/>
    </div>
  )
}

export default Todo