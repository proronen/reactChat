import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { pushMesage } from '../../actions';

class PushMesage extends Component {

    state = {
        userId: '',
        message: '',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('SUBMITTED', this.state);

        // TODO: validate this data
        if (!this.state.message || !this.state.userId) {
            alert('All fields are required');
            return;
        }

        this.props.pushMesage(this.state.message,this.state.userId);
    }
    
    render() {

        const { convList } = this.props;

        return (
        <React.Fragment>
        <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange} value={this.state.userId} name="userId">
                <option value="0">Choose user / group</option>
                {convList ? Object.keys(convList).map((convRow, i) => {return <option value={convRow} key={i}>{convList[convRow].first_name || convList[convRow].group_name}</option>}) : "" }
            </select>
            <input type="text" value={this.state.message} name="message"  onChange={this.handleChange}/> <button> Send</button>
        </form>
    </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({pushMesage}, dispatch);

export default connect(null, mapDispatchToProps)(PushMesage);