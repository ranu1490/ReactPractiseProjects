
export const ToggleMessagefn = ()=>
{
    let flag = false;

    const toggleFlag =()=>
    {
        console.log('Flag before: ',flag);
        flag=!flag;
        console.log('Flag after: ',flag);
    }

    const showMessage = ()=>
    {
        <div>
            <h1>I am Toggle Message</h1>    
        </div>
    }
    return(
        <div>
            <button onClick={toggleFlag}>Toggle Flag</button><br/>
            flag Message says: {flag ? showMessage():null}
        </div>
    )
}