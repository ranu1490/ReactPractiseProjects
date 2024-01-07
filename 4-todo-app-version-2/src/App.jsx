
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import { useState } from 'react'
import { TodoItemsContext } from './store/TodoItemsContext'
function App() {

  const [todoItems, setTodoItems] = useState([]);
  
  const addNewItem =(todoName,dueDate) =>{
    console.log(todoName," ", dueDate);
    const newItem = [...todoItems, {todoName: todoName, dueDate: dueDate}]
    console.log('todoItems', todoItems);
    // setTodoItems((currValue)=>{
    //   console.log(currValue);
    //   console.log(todoName," ", dueDate);
    //   [...currValue,{todoName: todoName, dueDate: dueDate}];
    // })
    setTodoItems(newItem)
  }

  const  deleteItem= (delTodoName)=>{
    let newTodoItem = todoItems.filter(item => item.todoName !==delTodoName)
    setTodoItems(newTodoItem);
  }

  return (
    <TodoItemsContext.Provider value={{todoItems,addNewItem,deleteItem}}>
    <center className='todo-container'>
      <AppName/>
      <AddTodo/>
      {todoItems.length === 0 && <p className='welcome'>Enjoy your day!!</p>}
      <TodoItems/> 
    </center>
    </TodoItemsContext.Provider>
  )
}

export default App
