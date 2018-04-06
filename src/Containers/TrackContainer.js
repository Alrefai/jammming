import React, { Component } from 'react';
import Track from '../Components/Track/Track';

class TrackContainer extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
  }

  renderAction() {
    return this.props.isRemoval ? '-' : '+';
  }

  handleOnClick() {
    return this.renderAction() === '+' ? this.addTrack : this.removeTrack;
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <Track
        trackName={this.props.track.name}
        trackArtist={this.props.track.artist}
        trackAlbum={this.props.track.album}
        renderAction={this.renderAction()}
        handleOnClick={this.handleOnClick()}
        addTrack={this.addTrack}
        removeTrack={this.removeTrack}
      />
    );
  }
}

export default TrackContainer;
