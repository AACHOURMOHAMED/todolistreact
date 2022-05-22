import React from 'react'
import DUMMY_DATA from '../Data/Data'
const TodoList = () => {
  return (
    <div className='TodoList'>
        <div className='Todo'>
          {DUMMY_DATA.map((data, index) =>
            
            <p>{data.text}</p>
            )}
        </div>
    </div>
  )
}

export default TodoList