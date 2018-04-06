import React, { Component } from 'react';
import Playlist from '../Components/Playlist/Playlist';

class PlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <Playlist
        value={this.props.playlistName}
        onChange={this.handleNameChange}
        tracks={this.props.playlistTracks}
        onRemove={this.props.onRemove}
        isRemoval={this.props.isRemoval}
        onClick={this.props.onSave}
      />
    );
  }
}

export default PlaylistContainer;
