// Import he React library
import React from 'react';
// Import the TrackList Component
import TrackList from '../TrackList/TrackList';
// Import styles
import './SearchResults.css';

class SearchResults extends React.Component {
    // No constructor is required for this Component

    render() {
        return (
            <div className='SearchResults'>
                <h2>Results</h2>

                {/* 
                    Render the TrackList Component with the props for the SearchResults section
                    of the App
                */}
                <TrackList
                    tracks={this.props.searchResults} // List of tracks for the SearchResults
                    onAdd={this.props.onAdd} // Method is originally from App Component
                    onPreview={this.props.onPreview} // Method originally from App Component
                    isRemoval={false} // This prop checks if the Track is in the TrackList
                />
            </div>
        )
    }
}

export default SearchResults;