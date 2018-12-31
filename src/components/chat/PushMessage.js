import React, { Component } from 'react'

export default class PushMessage extends Component {

    state = {
        message: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        // TODO: validate this data
        if (!this.state.message) {
            return;
        }

        this.props.pushMessage(this.state.message);
        this.setState({
            message: ""
        })
    }

    render() {
        return (
            <div id='pushMessageCont'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.message} name="message"  onChange={this.handleChange}/> <button> Send</button>
                </form>
            </div>
        )
    }
}