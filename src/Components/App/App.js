import React, { Component } from 'react';
import './App.css';
import SearchBar from '../../Containers/SearchBarContainer';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../../Containers/PlaylistContainer';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.props.onSearch} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.props.searchResults}
              onAdd={this.props.onAdd}
            />
            <Playlist
              playlistName={this.props.playlistName}
              onNameChange={this.props.onNameChange}
              playlistTracks={this.props.playlistTracks}
              onSave={this.props.onSave}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
