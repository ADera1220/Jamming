// Import React library
import React from 'react';
// import the TrackList Component
import TrackList from '../TrackList/TrackList';
// Import styles
import './PlayList.css';

class PlayList extends React.Component {
    constructor(props) {
        super(props);

        // Bind the Component methods
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    // Handles changes to the input for the PlayList name
    handleNameChange(e) {

    }

    render() {
        return (
            <div className='Playlist'>
                <input value={this.props.playlistName} onChange={this.handleNameChange} />

                <TrackList 
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    onPreview={this.props.onPreview}
                    isRemoval={true}
                />
                
                <button className='Playlist-save' onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList;