import React from 'react'

export default function index(props) {
  const data = props.convData;
  const lastMessageDate = data.messages ? data.messages[data.messages.length-1].date : "";
  const hideItem = data.hide ? "hide" : "";

  return (
    
    <div className={`conversation ${hideItem}`} onClick={props.chatHandler}>
      <div className="left">
        <div className="conversation_avatar" style={{ backgroundImage: `url(http://lorempixel.com/100/100/people/${data.avatar})`}}/>
      </div>
      <div className="right">
        <div className="conversation_name">
            {data.group_name ? data.group_name : (data.first_name + " " + data.last_name)}
        </div>
        <div className="conversation_last_message">
          {lastMessageDate}
        </div>
      </div>
    </div>
  )
}