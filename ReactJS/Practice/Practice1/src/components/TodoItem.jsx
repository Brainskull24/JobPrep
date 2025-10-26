import React from "react";

const TodoItem = ({ title, description }) => {
  return (
    <div style = {{display : "flex", gap: "10px"}}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
