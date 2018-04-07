import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

const Playlist = (props) => {
  return (
    <div className="Playlist">
      <input value={props.value} onChange={props.onChange}/>
      <TrackList
        tracks={props.tracks}
        onRemove={props.onRemove}
        isRemoval={props.isRemoval}
      />
      <a className="Playlist-save" onClick={props.onClick}>
        SAVE TO SPOTIFY
      </a>
    </div>
  );
}

export default Playlist;
