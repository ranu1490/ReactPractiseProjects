import React from "react";

export default class ToggleMessage extends React.Component{
    constructor(props)
    {
        super(props)
        console.log("Props are:",this.props);
        this.flag=true;
    }
    toggleFlag()
    {
        console.log('Flag before: ',this.flag);
        this.flag=!this.flag;
        console.log('Flag after: ',this.flag);
    }

    showMessage()
    {
        return (
            <div>
                <h1>I am Toggle Message</h1>
            </div>
        )
    }
    render()
    {
        return(
            <div>
                <button onClick={this.toggleFlag.bind(this)}>Toggle Flag</button><br/>
                flag Message says: {this.flag ? this.showMessage():null}
            </div>
        )
    }
}