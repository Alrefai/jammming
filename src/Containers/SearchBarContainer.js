import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar'

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  handleClick() {
    this.props.onSearch(this.state.term);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onSearch(this.state.term);
    }
  }

  render() {
    return (
      <SearchBar
        onChange={this.handleTermChange}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default SearchBarContainer;
