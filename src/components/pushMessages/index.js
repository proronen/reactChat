import React from 'react'

import ConvSelect from "./ConvSelect"

export default function index(props) {
    console.log("props");
    console.log(props);
    return (
      <div id="pushMessageCont">
       
        {props.convList && <ConvSelect convList={props.convList}/>}
      </div>
    )
}
