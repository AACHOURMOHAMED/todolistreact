import React, { useState } from "react";
import "./TodoForm.css";
const TodoForm = (props) => {
  const [enteredtext, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value)
  };


  const submitTodoHandler = (event) =>{
    event.preventDefault();
    const todoData = {
      text:enteredtext,
    }
    console.log(todoData)
    setEnteredText('')
    props.onSaveTodo(todoData)
  }
  return (
    
      <form className="Todo-Form" onSubmit={submitTodoHandler}>
        <input
          className="Input_Form"
          type="text"
          value={enteredtext}
          onChange={textChangeHandler}
          autoFocus
        />
        <button className="Btn_Form">ADD</button>
      </form>
    
  );
};

export default TodoForm;
