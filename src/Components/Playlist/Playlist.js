import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input value={this.props.value} onChange={this.props.onChange}/>
        <TrackList
          tracks={this.props.tracks}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
        />
        <a className="Playlist-save" onClick={this.props.onClick}>
          SAVE TO SPOTIFY
        </a>
      </div>
    );
  }
}

export default Playlist;
