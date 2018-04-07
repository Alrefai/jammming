import React from 'react';
import './TrackList.css';
import Track from '../../Containers/TrackContainer';

const TrackList = (props) => {
  return (
    <div className="TrackList">
      {
        props.tracks.map(track => {
          return (
            <Track
              track={track}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              isRemoval={props.isRemoval}
              key={track.id}
            />
          );
        })
      }
    </div>
  );
}

export default TrackList;
