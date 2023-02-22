// Import he React library
import React from 'react';
// Import the Track Component, used when rendering TrackList
import Track from '../Track/Track';
// Import styles
import './TrackList.css';

// Class declaration, extends the "Component" class of the React library
class TrackList extends React.Component {
    // There is no constructor required for the TrackList Component

    render() {
        return (
            <div>
                {
                    /*
                        The map() method for the tracks array is used to ensurte all of the tracks
                        in the list are displayed, inside it will create a Track component for each 
                        of the items in the list and display them sequentially
                    */
                    this.props.tracks.map(track => {
                        /*
                            Each track in the prop is an object returned from the Spotify API with
                            certain chosen details from the initial object returned. The Track 
                            Component below is passed this object, as well as the add, remove, preview
                            , and isRemoval props to ensure the Track Compmonent has the necessary
                            functionality.
                        */
                        return (<Track
                                    track={track} // The current track object
                                    key={track.id} // The unique ID of the track is the Key of the Component
                                    onAdd={this.props.onAdd} // Method originaly from App
                                    onRemove={this.props.onRemove} // Method originaly from App
                                    onPreview={this.props.onPreview} // Method originaly from App
                                    isRemoval={this.props.isRemoval} // Passed as a prop from either SearchResults or PlayList
                                />)
                        })
                }
            </div>
        )
    }
}

export default TrackList;