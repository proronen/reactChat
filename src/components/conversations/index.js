import React, { Component } from 'react'
import { convList } from '../../actions';

class Conversations extends Component {

    componentDidMount(){

        fetch("/userList.json")
        .then(res => res.json())
        .then(res => this.props.dispatch(loadConversations({
            type: "loadConversations",
            payload: {
                convList: res 
            }
        })));
    }

    render() {
        
        const { convList } = this.props;

        return (
            <div>
                {convList ? convList.map(convRow => {return <Converation convData={convRow} />}) : "" }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.Conversations
}

export default connect(mapStateToProps)(Conversations);