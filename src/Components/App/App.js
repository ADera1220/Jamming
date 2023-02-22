// Import the React library
import React from 'react';
// Import styles
import './App.css';
// Import the Components needed to render the page
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../PlayList/PlayList';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';
import PreviewBar from '../PreviewBar/PreviewBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    // App is the only "stateful" Component of the project, so we will set the state here
    this.state = {
      searchResults: [],
      playlistName: 'popBops',
      PlaylistTracks: [],
      preview: ''
    }

    // Bind the Component methods
    this.addTrack = this.addTrack.bind(this);
    this.previewTrack = this.previewTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
    this.previewTrack = this.previewTrack.bind(this);
  }

  // Add the current Track to the TrackList
  addTrack(track) {

  }

  // Removes the current Track from the TrackList
  removeTrack(track) {

  }

  // Updates the name of the current PlayList
  updatePlayListName(name) {

  }

  // Saves the current PlayList to the Spotify account
  savePlayList() {

  }

  // Queries Spotify using the current search term
  search(term) {

  }

  // Updates the track in the PreviewBar
  previewTrack(preview) {

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmmm</span>ing</h1>
        <div className='PreviewTrack'>
          <PreviewBar previewTrack={this.state.previewTrack} />
        </div>
        <div className='App'>
          <SearchBar onSearch={this.search} />
          <div className='App-playlist'>
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} 
              onPreview={this.previewTrack}
            />
            <PlayList 
              playlistName={this.state.playlistName} 
              playlistTrack={this.state.PlaylistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlayListName}
              onSave={this.savePlayList}
              onPreview={this.previewTrack}
              />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
