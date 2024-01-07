import React from 'react'
import UnmountPhaseMsg from './UnmountPhaseMsg';
export default class UnmountPhase extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
        this.state = {
            list: [
                { id: 1, message: 'God' },
                { id: 2, message: 'is' },
                { id: 3, message: 'Almighty' },
            ]
        };
    }
    componentDidMount() {
        console.log("Component Did Mount");

    }
    removeItem(id) {
        const newList = this.state.list.filter(item => item.id !== id);
        this.setState({ list: newList });
    }
    render() {
        return (
            <div className="App">
                <h1>My Items</h1>
                {this.state.list.map(item => (
                    < UnmountPhaseMsg key={item.id}
                        id={item.id}
                        message={item.message}
                        removeItem={this.removeItem.bind(this)}
                    />
                ))}
            </div>
        );
    }
    componentDidUpdate() {
        console.log("Component Did Update");
    }
    shouldComponentUpdate() {
        console.log(" Should Component  Update");
        return true;
    }

}