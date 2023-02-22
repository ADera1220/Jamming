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

    addTrack() {
        /* 
            The onAdd prop is referencing the addTrack() method from the App Component.
            calling the onAdd prop method sends the current track as a prop back to the
            addTrack method in the App Component, which will add the track to the current
            TrackList
        */
       this.props.onAdd(this.props.track);
    }

    removeTrack() {
        /*
            The onRemove prop is referencing the removeTrack() method from the App Component.
            calling the onRemove prop method sends the current track as a prop back to the
            removeTrack method in the App Component, which will remove the track to the current
            TrackList
        */
        this.props.removeTrack(this.props.track);
    }

    renderChange() {
        /*
            If the value of isRemoval is changed, then the Track is re-rendered. This will
            ensure that the correct button and method are rendered in the Component, if the
            Track is not in the TrackList, it will render a "+" button with the addTrack
            method assigned to it's onClick property, otherwise it renders a "-" button with
            the removeTrack method assigned to it's onClick property.
        */

            if(this.props.isRemoval) {
                return (
                    <button
                        className='"Track-action'
                        onClick={this.removeTrack}
                    >
                        -
                    </button>
                )
            } else {
                return (
                    <button
                        className='"Track-action'
                        onClick={this.addTrack}
                    >
                        +
                    </button>
                )
            }
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
                        Calling the renderChange method here will display the correct button 
                        based on wether the track is already in the TrackList or not.
                    */
                    this.renderChange()
                }
            </div>
        )
    }
}

export default Track;