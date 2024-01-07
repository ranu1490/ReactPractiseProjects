import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsContext";

const TodoItem = ({ todoName, dueDate }) => {
  const {deleteItem}=useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row row-items">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{dueDate}</div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger button" onClick= {()=>deleteItem(todoName)}>
            <MdDelete/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
