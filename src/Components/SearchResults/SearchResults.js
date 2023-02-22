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

                <TrackList
                    tracks={this.props.SearchResults}
                    onAdd={this.props.onAdd}
                    onPreview={this.props.onPreview}
                    isRemnoval={false}
                />
            </div>
        )
    }
}

export default SearchResults;