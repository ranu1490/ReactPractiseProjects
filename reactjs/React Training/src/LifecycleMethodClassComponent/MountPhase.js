import React from "react";

export default class MountPhase extends React.Component{
    constructor(props)
    {
        super(props);
        console.log('Constructor is called');
        this.state={count: 0};
        console.log("state is: ",this.state);
    }
    Increment()
    {
        this.setState({count: this.state.count+1})
    }

    Decrement()
    {
        this.setState({count: this.state.count-1})
    }
    render()
    {
        console.log('Render is called');
        return(
            <>
                <h1>Mount Phase of class Component</h1>
                count is: {this.state.count}<br/>
                <button onClick={this.Increment.bind(this)}>Click +</button>&nbsp;
                {/* count is: {this.state.count}<br/> */}
                <button onClick={this.Decrement.bind(this)}>Click -</button>
            </>
        )
    }
    componentDidMount(){
        console.log('componentDidMount is called');
    }
}