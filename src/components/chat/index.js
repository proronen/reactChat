import React from 'react'
import PushMessage from "./PushMessage";

export default function index(props) {

    const {messages} = props; 
    
    return (
        <div id="chatWindow">
            <div id="messagesCont">
                {
                    messages.map((msg, i) => {
                        return <div key={i} className={(msg.type === "sent") ? "sent" : "received"}><div className="msg_cont">{msg.content}</div></div>
                    })
                }
            </div>
            <PushMessage {...props}/>
        </div>
    )
}
