import React, { useReducer } from 'react'
const initialState={count:0}

function reducer(state,action){
    console.log('action is',action);
    console.log('state is',state);
    switch(action.type){
        case 'increment':
            return {...state,count:state.count+1};
        case 'decrement':
            return {...state,count:state.count-1};
        default:
            return state
    }
}

const UseReducerhook = () => {
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
        Count: {state.count}
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
    </>
  );
}

export default UseReducerhook
