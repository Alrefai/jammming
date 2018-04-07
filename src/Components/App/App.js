import React from 'react';
import './App.css';
import SearchBar from '../../Containers/SearchBarContainer';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../../Containers/PlaylistContainer';


const App = (props) => {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={props.onSearch} />
        <div className="App-playlist">
          <SearchResults
            searchResults={props.searchResults}
            onAdd={props.onAdd}
          />
          <Playlist
            playlistName={props.playlistName}
            onNameChange={props.onNameChange}
            playlistTracks={props.playlistTracks}
            onSave={props.onSave}
            onRemove={props.onRemove}
            isRemoval={props.isRemoval}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
