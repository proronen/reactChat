import React, { Component } from 'react'

export default class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.searchValRef = React.createRef();
        this.searchValRef.current.focus();
    }

    render() {
        return (
            <div>
            <input type='text' name='searchVal' ref={this.searchValRef} value={this.state.searchVal} onChange={this.handleSearchVal}/>
            </div>
        )
    }
}
