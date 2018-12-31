import React, { Component, Fragment } from 'react';
import SearchBtn from './SearchBtn';
import SearchInput from './SearchInput'

class Search extends Component {

  state = {
      searchVal: "",
      isOpen: false
  }

  btnClick = () => {
    if(this.props.isChat){
      this.props.returnToConversations();
    } else {
      this.props.toggleSearch();
      this.setState({
        isOpen: !this.state.isOpen 
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    
    const {searchOpened} = this.props.searchReducer;
   
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} id="searchForm">
          <SearchBtn btnClick={this.btnClick} isOpen={this.state.isOpen} isChat={this.props.isChat}/>
          {searchOpened && <SearchInput searchFunc={this.props.search}/>}
        </form>
      </Fragment>
    )
  }
}

export default Search;