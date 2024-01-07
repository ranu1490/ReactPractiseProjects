import React from 'react'
export default class Handleclickcls extends React.Component {

    constructor(props) {
        super(props);
        this.name = null;
        this.HandleClick = this.HandleClick.bind(this);//bind is used to preserve the value
    }
    HandleClick() {
        this.name = 'Ranu';
        console.log(this.name);
    }
    render() {
        return (
            <button onClick={this.HandleClick}>click</button>
        )
    }
}