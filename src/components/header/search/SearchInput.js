import React, { Component } from 'react'

export default class SearchInput extends Component {
  render() {
      const {inputHandler} = this.props;
    return (
        <React.Fragment>
            input
            <input type='text' name='searchVal' onChange={e => inputHandler(e)}/>
        </React.Fragment>
    )
  }
}