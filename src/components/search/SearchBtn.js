import React, { Component } from 'react'

export default class SearchBtn extends Component {
  render() {

    const isOpen = this.props.isOpen;
    const isChat = this.props.isChat;

    return (
        <div className="searchBtn" onClick={this.props.btnClick}>
            {isChat ? <i className="fas fa-arrow-left"></i> : isOpen ?  <i className="fas fa-times"></i> : <i className="fas fa-search"></i> }  
        </div>
    )
  }
}