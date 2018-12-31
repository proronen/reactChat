import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleSearch, search, populateSearchVal } from '../../../actions';

import SearchBtn from './SearchBtn';
import SearchInput from './SearchInput'

class Search extends Component {

  inputHandler = val => {
    console.log("input from search") 
    this.props.dispatch(populateSearchVal({
      payload: {
        q: val.target.value
      }
    }));
  }

  ClickedSearchBtn = () => {
    
    const searchVal = this.props.searchVal; 

    if(searchVal != ""){
      this.props.dispatch(search({
        q: searchVal
      }));
    } else {
      this.props.dispatch(toggleSearch());
    }

  }

  handleSubmit = e => {
    e.preventDefault(); 
    console.log("form submitted");
    console.log(e);
  }

  render() {
    const {searchOpened, searchVal} = this.props;
    return (
      <Fragment>
        <form>
          <SearchBtn btnClick={this.ClickedSearchBtn}/>
          {searchOpened && <SearchInput inputHandler={(val) => this.inputHandler(val)}/>}
        </form>
      </Fragment>
    )
  }
}

function mapStateToProps(state){
    return state.SearchReducer;
}
 
//function mapDispatchToProps(dispatch){
//  console.log("dispatch");
//  //console.log(dispatch.openSearch);
//    return ({
//      openSearch: () => dispatch(openSearch())
//    });
//}

export default connect(mapStateToProps)(Search);