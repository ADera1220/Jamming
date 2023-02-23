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
        /*
            When the value of the <input> element below is changed, the corresponding value 
            is passed to the onNameChange prop, which calls the updatePlaylistName() method
            in the App component.
        */
        this.props.onNameChange(e.target.value);
    }

    render() {
        return (
            <div className='Playlist'>
                <input 
                    value={this.props.playlistName} // The input will auto-populate with the playlistName
                    onChange={this.handleNameChange} // Any change to the input will force an update
                />

                <TrackList 
                    tracks={this.props.playlistTracks} // Array passed from App Component
                    onRemove={this.props.onRemove} // Method passed from App Component
                    onPreview={this.props.onPreview} // Method Passed from App Component
                    isRemoval={true} // This props ensures ??????
                />
                
                <button 
                    className='Playlist-save' 
                    onClick={this.props.onSave} // Calls the onSave method from App Component
                >
                    SAVE TO SPOTIFY
                </button>
                <button 
                    className='Playlist-clear'
                    onClick={this.props.onClear} // Calls the onClear method from the App Component
                >
                    CLEAR LIST
                </button>
            </div>
        )
    }
}

export default PlayList;