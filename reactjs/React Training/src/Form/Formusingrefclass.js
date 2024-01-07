import React from 'react'

export class FormUsingRefClass extends React.Component {
    constructor(props) {
        super(props);
        this.nameEl = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(this.nameEl.current.value);
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:
                        <input type="text" id="name" ref={this.nameEl} />
                    </label>
                    <input type="submit" name="submit" />
                </form>
            </>
        )
    }
}