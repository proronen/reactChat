import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { pushMesage } from '../../actions';

class PushMesage extends Component {

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

        this.props.pushMesage(this.state.message);
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

const mapDispatchToProps = (dispatch) => bindActionCreators({pushMesage}, dispatch);

export default connect(null, mapDispatchToProps)(PushMesage);