import React, { Component } from 'react'

export default class SearchBtn extends Component {
  render() {
    return (
        <div onClick={this.props.btnClick}>
            btn<i className="fas fa-search"></i>
        </div>
    )
  }
}