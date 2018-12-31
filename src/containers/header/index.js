import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {toggleSearch,search,loadConversations,returnToConversations} from '../../actions' 

import Search from '../../components/search/';

class Header extends Component {

  render() {
    return (
      <header>
          <Search {...this.props}/>
          <div id="logo">
          ReactChat&nbsp;<i className="fas fa-comments"></i>
          </div> 
      </header>
    )
  }

}

const mapStateToProps = (state) => ({
  searchReducer: state.searchReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({toggleSearch,search,loadConversations,returnToConversations}, dispatch); 

export default connect(mapStateToProps,mapDispatchToProps)(Header);