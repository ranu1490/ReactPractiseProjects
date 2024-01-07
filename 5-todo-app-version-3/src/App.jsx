
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import TodoItemsContextProvider from './store/TodoItemsContext'
import Welcome from './components/Welcome'

function App() {
  return (
    <TodoItemsContextProvider>
    <center className='todo-container'>
      <AppName/>
      <AddTodo/>
      <Welcome/>
      <TodoItems/> 
    </center>
    </TodoItemsContextProvider>
  )
}

export default App
