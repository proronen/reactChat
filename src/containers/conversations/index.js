import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadConversations,openChat } from '../../actions';

import Conversation from "../../components/conversation";

class Conversations extends Component {

    componentDidMount(){
        this.props.loadConversations();
    }
    
    openChat = (id) => {
        this.props.openChat(id);
    }

    render() {

        const { conversations } = this.props.conversationsReducer;
        
        return (
            <div>
                {conversations ? Object.keys(conversations).map((itemId) => {return <Conversation key={itemId} uniqueKey={itemId} convData={conversations[itemId]} chatHandler={() => this.openChat(itemId)} />}) : "" }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    conversationsReducer: state.conversationsReducer
})
  
const mapDispatchToProps = dispatch => bindActionCreators({loadConversations, openChat}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Conversations);