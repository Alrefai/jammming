import React, { Component } from 'react';
import './TrackList.css';
import Track from '../../Containers/TrackContainer';

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return (
              <Track
                track={track}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
                isRemoval={this.props.isRemoval}
                key={track.id}
              />
            );
          })
        }
      </div>
    );
  }
}

export default TrackList;
