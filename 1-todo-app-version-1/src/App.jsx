
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import TodoItems from './components/TodoItems'
import { useState } from 'react'
function App() {

  const [todoItems, setTodoItems] = useState([]);
  
  const handleTodo =(todoName,dueDate) =>{
    console.log(todoName," ", dueDate);
    // const newItem = [...todoItems, {todoName: todoName, dueDate: dueDate}]
    setTodoItems((currValue)=>{
      [...todoItems, {todoName: todoName, dueDate: dueDate}];
    })
  }

  const handleDeleteTodo = (delTodoName)=>{
    let newTodoItem = todoItems.filter(item => item.todoName !==delTodoName)
    setTodoItems(newTodoItem);
  }

  return (
    <center className='todo-container'>
      <AppName/>
      <AddTodo onTodo = {handleTodo}/>
      {todoItems.length === 0 && <p className='welcome'>Enjoy your day!!</p>}
      <TodoItems todoItems={todoItems} onDeleteTodo ={handleDeleteTodo}/> 
    </center>
  )
}

export default App
