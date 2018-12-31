import React, { Component } from 'react'

export default class SearchInput extends Component {

    state = {
        searchVal: ""
    }

    constructor(props) {
        super(props);
        this.searchValRef = React.createRef();
    }
    
    componentDidMount() {
        this.searchValRef.current.focus();
    }

    handleSearchVal = event => {
        const val = event.target.value;
        
        this.setState({
            searchVal: val
        })
        this.props.searchFunc(val);
    }


    render() {
        return (
            <React.Fragment>
                <input type='text' name='searchVal' ref={this.searchValRef} value={this.state.searchVal} onChange={this.handleSearchVal}/>
            </React.Fragment>
        )
    }
}
