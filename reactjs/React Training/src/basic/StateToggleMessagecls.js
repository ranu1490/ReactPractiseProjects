import React from "react";

export default class ToggleMsgcls extends React.Component{
    constructor(props)
    {
        super(props)
        console.log("Props are: "+this.props);
        this.flag=true;
        this.state={showmsg: true}
        console.log("state is: ",this.state);
    }

    toggleFlag()
    {
        console.log('Flag before: ',this.flag);
        this.flag =!this.flag;
        console.log('Flag after: ',this.flag);
    }

    toggleMsg()
    {
        this.setState({showmsg: !this.state.showmsg})
    }

    showMessage()
    {
        return(
            <div>
                <h1>I am toggle message</h1>
            </div>
        )
    }

    render()
    {
        return(
            <div>
                <button onClick={this.toggleMsg.bind(this)}>Toggle Msg</button><br/>
                showmsg {this.state.showmsg} state says: {this.state.showmsg ? this.showMessage():null} <br/>
                <button onClick={this.toggleFlag.bind(this)}>Toggle Flag</button><br/>
                flag {this.flag} says:{this.flag?this.showMessage():null}
            </div>
        )
    }
}