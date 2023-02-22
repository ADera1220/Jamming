// Import the React library
import React from 'react';
// Import styles
import './App.css';
// Import the Components needed to render the page
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../PlayList/PlayList';
import SearchResults from '../SearchResults/SearchResults';
import PreviewBar from '../PreviewBar/PreviewBar';
// Import the Spotify API utility
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    // App is the only "stateful" Component of the project, so we will set the state here
    this.state = {
      searchResults: [],
      playlistName: 'newPlaylist',
      playlistTracks: [],
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

  addTrack(track) {
    /*
      Takes a track that has been passed up from the Track Component and appends it to the
      playlistTracks array. this change should force a re-render of the PlayList Component
      and it's children. If the track is already in the playlistTracks array, then nothing is
      changed, the app will not allow duplicate tracks in a playlist.
    */

      let tracks = this.state.tracks;

      if(tracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      }

      this.setState({
        playlistTracks:[...tracks, track]
      });
  }

  removeTrack(track) {
    /*
      Takes a track that has been passed up from the Track Component and, if it is listed
      currently in the playlistTracks array, will remove it from this array and attempt to
      re-render the PlayList Component and it's children
    */

    let tracks = this.state.playlistTracks;

    if(tracks.find(savedTrack => savedTrack.id === track.id)) {

      var index = tracks.indexOf(track);

      delete tracks[index];

      this.setState({
        playlistTracks: tracks
      });
    }
  }

  updatePlayListName(name) {
    /*
      Takes a value passed up from the PlayList Component and updates the playlistName state 
      with this value, then attempts to re-render the PlayList Component with this new value.
    */

      this.setState({
        playlistName: name
      });
  }

  savePlayList() {
    /*
      This uses the current value of the playlistTracks array from the state, and save it to
      Spotify as a valid playlist. This requires grabbing an array of just the track URIs, then
      sending this array to Spotify. If successful, the playlistName state should be reset.
    */

    // const trackURIs = this.state.playlistTracks.map(track => track.uri);

    // Spotify.savePlayList(this.state.playlistName, trackURIs);

    // this.updatePlayListName('New Playlist');
  }

  search(term) {
    /*
      This takes the input value passed up from SearchBar and passes it to the Spotify API 
      utlity. The utility will, in turn, query Spotify's API with the term to return a list of
      tracks that can be assigned to the searchResults state. If successful, the SearchResults
      Component will be re-rendered with the updated results. As a precaution, if the term is
      passed without value, the search is carried out with a blank space.
    */

      // let kwrd = term === undefined ? ' ' : term;

      // Spotify.search(kwrd)
      //   .then(result => {
      //     this.setState({
      //       searchResults: result
      //     })
      // })
  }

  // Updates the track in the PreviewBar
  previewTrack(preview) {
    /*
      Takes the URL passed up from the Track Component and attempts to re-render the PreviewBar
      Component with the new URL. If the value passed up is the same as the current preview state
      then the method is ended without changes.
    */

      if(preview === this.state.preview) {
        return;
      }

      this.setState({
        preview: preview
      })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmmm</span>ing</h1>
        <div className='PreviewTrack'>

          <PreviewBar 
            previewTrack={this.state.previewTrack} // Passes the track URL to the PreviewBar Component
          />

        </div>

        <div className='App'>
          <SearchBar 
            onSearch={this.search} // Passes the search method to the SearchBar Component
          />

          <div className='App-playlist'>
            <SearchResults 
              searchResults={this.state.searchResults} // Results from Spotify API passed as a prop
              onAdd={this.addTrack} // Method addTrack is passed as a prop
              onPreview={this.previewTrack} // Method previewTrack is passed as a prop
            />

            <PlayList 
              playlistName={this.state.playlistName} // State playlistName passed as prop
              playlistTrack={this.state.playlistTracks} // State playListTracks passed as prop
              onRemove={this.removeTrack} // Method removeTrack passed as prop
              onNameChange={this.updatePlayListName} // Method updatePlaylistName passed as prop
              onSave={this.savePlayList} // Method savePlayList passed as prop
              onPreview={this.previewTrack} // Method previewTrack passed as prop
              />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
