import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'Playlist name',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const newPlaylist = this.state.playlistTracks.slice();
    newPlaylist.push(track);
    const updatedSearchResults = this.state.searchResults.filter(element => {
      return element.id !== track.id;
    });
    this.setState({
      searchResults: updatedSearchResults,
      playlistTracks: newPlaylist,
    });
  }

  removeTrack(track) {
    const newPlaylist = this.state.playlistTracks.filter(trackInList => {
      return trackInList.id !== track.id;
    });
    const updatedSearchResults = this.state.searchResults.slice();
    updatedSearchResults.push(track);
    this.setState({
      searchResults: updatedSearchResults,
      playlistTracks: newPlaylist
    });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const playlist = this.state.playlistTracks.slice();
    const trackURIs = playlist.map(trackUri => {
      return trackUri.uri;
    });
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({
      searchResults: [],
      playlistName: 'Playlist name',
      playlistTracks: []
    });
  }

  search(term) {
    Spotify.search(term).then(results => {
      this.setState({ searchResults: results });
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              onNameChange={this.updatePlaylistName}
              playlistTracks={this.state.playlistTracks}
              onSave={this.savePlaylist}
              onRemove={this.removeTrack}
              isRemoval={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
