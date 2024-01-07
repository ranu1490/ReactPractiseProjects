import React from 'react';
export class FormUsingClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', designation: '', salary: 0 };
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value)
        this.setState({ name: event.target.value });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <h1> Hello {this.state.name}</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} 
						onChange={this.handleChange} />

                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}