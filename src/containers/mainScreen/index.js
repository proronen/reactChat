import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import Header from '../header';
import Conversations from '../conversations';
import Chat from '../chat';

class MainScreen extends Component {

    state = {
        chatId: this.props.chatId
    }

    render() {

    const { chatId } = this.props.chatReducer;
    
    return (
      <React.Fragment>
        <Header isChat={chatId}/>
        {chatId ? <Chat {...this.props} /> : <Conversations /> }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  chatReducer: state.chatReducer, 
  conversationsReducer: state.conversationsReducer  
})

export default connect(mapStateToProps)(MainScreen);