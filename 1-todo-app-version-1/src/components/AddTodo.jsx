import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";

const AddTodo = ({onTodo}) => {
  const todoName = useRef()
  const dueDate = useRef()

  const handleClick = (event)=>{
    event.preventDefault();
    const todoNameElement = todoName.current.value;
    const dueDateElement = dueDate.current.value;
    onTodo(todoNameElement,dueDateElement);
    todoName.current.value="";
    dueDate.current.value="";
  }

  return (
    
    <div className="container text-center">
      <form onSubmit={handleClick} className="row row-items">
        <div className="col-sm-6">
          <input type="text" placeholder="Enter Todo" ref={todoName}/>
        </div>
        <div className="col-sm-4">
          <input type="date"  ref={dueDate}/>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success button" >
            <IoMdAdd/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
