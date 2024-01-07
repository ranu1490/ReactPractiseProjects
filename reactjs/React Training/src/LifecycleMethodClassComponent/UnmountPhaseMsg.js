import React from 'react'
export default class UnmountPhaseMsg extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
                <button onClick={() => this.props.removeItem(this.props.id)}>
                    Remove me
                </button>
            </div>
        );
    }
    componentWillUnmount() {
        console.log("Component Will UnMount from MSG Component");
        console.log('Removing item', this.props.message);
    }
    
}