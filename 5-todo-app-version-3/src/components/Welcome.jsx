import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/TodoItemsContext'

const Welcome = () => {
    const {todoItems} =useContext(TodoItemsContext);
  return (
    <div>
        {todoItems.length === 0 && <p className='welcome'>Enjoy your day!!</p>}
    </div>
  )
}

export default Welcome