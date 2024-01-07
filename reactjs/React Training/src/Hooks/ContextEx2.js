import React, { useContext } from "react";
import { createContext } from "react";

const Context = createContext("Default Value");
function Child(){
    const context = useContext(Context);
    return <h2>Child1: {context}</h2>
}
function Child2(){
    const context = useContext(Context);
    return <h2>Child2: {context}</h2>
}
export function UseContext(){
    return(
        <>
            <Context.Provider value={"Initial Value"}>
                 <Child/> {/*Child inside provider will get "Initial Value" */}
            </Context.Provider>
             <Child2/>   {/*Child outshide Provider will get "Default Value" */}
        </>
    )
}
