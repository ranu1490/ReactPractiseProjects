import { createContext, useContext } from "react";

const Context = createContext("Default Value");
console.log("Context: ",Context);
export function ContextDemo()
{
    const value = "God is Almighty";
    return(
        <Context.Provider value={value}>
        <MyComponent/><br/>
        <MyComponent1/>
        </Context.Provider>
    );
}

function MyComponent()
{
    console.log("before: ",Context);
    const value = useContext(Context);
    console.log("after",value);
    return <span>{value}</span>
}

function MyComponent1()
{
    return(
        <Context.Consumer>
            {value => <span>{value}</span>}
        </Context.Consumer>
    )
}