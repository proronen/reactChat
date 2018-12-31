import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadConversations,pushMessage } from '../../actions';

import ChatWindow from "../../components/chat";

class Chat extends Component {
  render() {
    const { chatId } = this.props.chatReducer;
    const { loadConversations,pushMessage } = this.props;
    
    return (
      <div>
        <ChatWindow messages={loadConversations(chatId)} pushMessage={pushMessage}/>     
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({loadConversations,pushMessage}, dispatch);

const mapStateToProps = (state) => ({
  chatReducer: state.chatReducer
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat)