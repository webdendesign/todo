import React from "react";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "green"
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;
