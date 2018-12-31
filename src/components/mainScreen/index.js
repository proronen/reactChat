import React, { Component } from 'react'
import Header from '../../containers/header';
import Conversations from '../../containers/conversations';
import Chat from '../../containers/chat';

export default class MainScreen extends Component {

    state = {
        chat: this.props.chat,
        chatId: this.props.Id
    }

  render() {

    const {chat, chatId} = this.state;

    return (
      <React.Fragment>
        <Header />
        {chat ? <Chat chatId={chatId} /> : <Conversations /> }
      </React.Fragment>
    )
  }
}
