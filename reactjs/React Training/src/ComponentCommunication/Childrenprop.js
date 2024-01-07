

export const ChildrenProps = () =>
{
    const data = "Hi Child from Parent";
    return(
        <div>
            <h1>I have sent you hi</h1>
            <h2>I m h2</h2>
            <Child dataFromParent = {data}>
                <h1>Hi I am children Props</h1>
                <h2>i am also Child prop</h2>
            </Child>
        </div>
    )
}

const Child =({dataFromParent,children}) =>{
    console.log("children prop is: ",children);
    return(
        <div>
            {children.length}
            {children}
            {dataFromParent}
        </div>
    )
}