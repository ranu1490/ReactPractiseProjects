export const Handleclickfn = () => {
    let name ='Anonymous';
    //handleClick is a synthectic event -> it should be written in camelcase
    const handleClick = function()
    {
        name='Ranu';
        alert(name);
    }

    return (
        <div>
            <h1>HandleClick Demo </h1>
            {/* handleClick is synthectic event so when we assign it... it should be written inside curly braces */}
            <button onClick = {handleClick}>Click</button> 
        </div>
    )
}