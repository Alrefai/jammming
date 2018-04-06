import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.trackName}</h3>
          <p>{this.props.trackArtist} | {this.props.trackAlbum}</p>
        </div>
        <a className="Track-action" onClick={this.props.handleOnClick}>
          {this.props.renderAction}
        </a>
      </div>
    );
  }
}

export default Track;
