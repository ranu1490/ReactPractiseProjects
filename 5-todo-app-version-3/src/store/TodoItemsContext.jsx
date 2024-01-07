import { createContext, useCallback, useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItem: [],
    addNewItem: ()=>{},
    deleteItem: ()=>{}
})

const todoReducer =(curTodoItems,action)=>{
    let newTodoItem=curTodoItems;
    if(action.type==='NEW_ITEM'){
      newTodoItem = [...curTodoItems, {todoName: action.payload.todoName, dueDate: action.payload.dueDate}]
    }
    else if(action.type==='DELETE_ITEM'){
      newTodoItem = curTodoItems.filter(item => item.todoName !==action.payload.delTodoName)
    }
    return newTodoItem;
 }

const TodoItemsContextProvider =({children})=>{
    const [todoItems, dispatchTodoItems] = useReducer(todoReducer, [])
  
    const addNewItem =useCallback((todoName,dueDate) =>{
      console.log(todoName," ", dueDate);
      const newItemAction = {
        type:"NEW_ITEM",
        payload:{
          todoName,
          dueDate,
        },
      };
      dispatchTodoItems(newItemAction);
    },[dispatchTodoItems])
  
    const deleteItem =useCallback((delTodoName)=>{
      const newItemAction = {
        type:"DELETE_ITEM",
        payload:{
          delTodoName: delTodoName
        },
      };
      dispatchTodoItems(newItemAction);
    },[dispatchTodoItems])
  
    return(
    <TodoItemsContext.Provider value={{todoItems,addNewItem,deleteItem}}>
        {children}
    </TodoItemsContext.Provider>
    )
}
export default TodoItemsContextProvider;