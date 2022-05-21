import React from 'react'
import './TodoForm.css'
const TodoForm = () => {
  return (
    <form className='Todo-Form'>
        <input className='Input_Form' type='text'/>
        <button className='Btn_Form'>ADD</button>
    </form>
  )
}

export default TodoForm