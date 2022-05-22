import React from "react";
import DUMMY_DATA from "../Data/Data";
const TodoList = (props) => {
  return (
    <div className="TodoList">
      <div className="Todo">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default TodoList;
