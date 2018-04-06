import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar'

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  handleSearch() {
    this.props.onSearch(this.state.term);
  }

  render() {
    const onChange = this.handleTermChange;
    const onClick = this.handleSearch;
    return <SearchBar onChange={onChange} onClick={onClick} />;
  }
}

export default SearchBarContainer;
