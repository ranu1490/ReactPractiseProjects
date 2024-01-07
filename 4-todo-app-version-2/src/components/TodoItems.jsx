import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";

const TodoItems = () => {
  const {todoItems}=useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((items) => (
        <TodoItem
          key={items.todoName}
          todoName={items.todoName}
          dueDate={items.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
