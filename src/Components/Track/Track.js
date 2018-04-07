import React from 'react';
import './Track.css';

const Track = (props) => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.trackName}</h3>
        <p>{props.trackArtist} | {props.trackAlbum}</p>
      </div>
      <a className="Track-action" onClick={props.handleOnClick}>
        {props.renderAction}
      </a>
    </div>
  );
}

export default Track;
