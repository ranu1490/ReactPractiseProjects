import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems,onDeleteTodo }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((items) => (
        <TodoItem
          key={items.todoName}
          todoName={items.todoName}
          dueDate={items.dueDate}
          onDeleteTodo = {onDeleteTodo}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
