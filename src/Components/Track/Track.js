// Import the React Library
import React from 'react';
// Immport styles
import './Track.css';

// Class declaration, extends the "Component" class of the React library
class Track extends React.Component {
    // Pass the props into the constructor
    constructor(props) {
        // Props are handled by the Parent "Component" class
        super(props);

        // Bind the class methods
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.renderChange = this.renderChange.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
    }

    // Calls the onAdd prop to pass the track up to the App Component
    addTrack() {

    }

    // Calls the onRemove prop to pass the track up to the App Component
    removeTrack() {
    
    }

    // Changes the function of the add/remove track button based on whether the track is in the list
    renderChange() {

    }

    // If the Preview button is clicked, executes the onPreview method from the "" Component
    handlePreview() {

    }

    // Prepares the JSX and passes it up to the TrackList Component
    render() {
        return (
            <div>
                <div className='Track-information'>
                    <h3>{this.props.track.name}</h3>

                    <p>{this.props.track.artist} | {this.props.track.album}</p>

                    <button
                        className='Track-action'
                        onClick={this.handlePreview}
                    >
                        Preview
                    </button>
                </div>
                {
                    /* 
                        Calling the renderChange method here will display the correct button based
                        on wether the track is already in the TrackList or not.
                    */
                    this.renderChange()
                }
            </div>
        )
    }
}

export default Track;