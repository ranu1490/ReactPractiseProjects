import React from "react";

export default class UpdatePhase extends React.Component{
    constructor(props)
    {
        super(props)
        console.log('Constructor is called');
        this.state = {count: 0}
    }

    render()
    {
        console.log('Render is called');
        return (<>
                    Count is: {this.state.count}<br/>
                    <h1>Update Phase</h1>
            </>)
    }

    componentDidMount()
    {
        console.log('componentDidMount is called');
        setTimeout(()=>this.setState({count:this.state.count + 1}),10000);
    }

    shouldComponentUpdate()
    {
        console.log('Count is: ',this.state.count);
        console.log('shouldComponentUpdate is called');
        return true;//return 1
        //return false; //retun 0
    }

    componentDidUpdate()
    {
        console.log('componentDidUpdate is called');
    }
}