import React from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import {Spotify} from '../../util/Spotify/Spotify.js';

function App() {
  const [searchResults, setSearchResults] = React.useState([
    {
      name: "song1",
      artist: "artist1",
      album: "album1",
      id: 1
  },
  {
    name: "song2",
    artist: "artist2",
    album: "album2",
    id: 2
  }
  ])

  const [playlistName, setPlaylistName] = React.useState("Playlist Name")
  const [playlistTracks, setPlaylistTracks] = React.useState([
    {
      name: "Playlist1",
      artist: "playlist - Artist1",
      album: "playlist - Album1",
      id: 3
    },
    {
      name: "Playlist2",
      artist: "playlist - Artist2",
      album: "playlist - Album2",
      id: 4
    },
  ])

  function addTrack(track) {
    const currentTrack = playlistTracks.find((item) => item.id === track.id)
    const newTrack = playlistTracks.concat(track)
    currentTrack ? console.log("Track has been already added to the Playlist.") : setPlaylistTracks(newTrack)
  }

  function removeTrack(track) {
    const tracksNotToRemove = playlistTracks.filter((item) => item.id !== track.id)
    setPlaylistTracks(tracksNotToRemove)
  }

  function updatePlaylistName(name) {
    setPlaylistName(name)
  }
  
  function savePlaylist() {
    const trackURIs = playlistTracks.map((track) => track.uri)
  }

  function search(term) {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term)
  }

  return (
  
    <div className={styles.App}>

      <header className={styles["App-header"]}>
        <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>

      <div className={styles["App-Bar"]}>
        <p>
          <SearchBar onSearch={search}/>
        </p>
      </div>


      <div className={styles.Mainbox}>
        <div className={styles["App-SearchResults"]}>
          <p>Search results:</p>
          <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
        </div>

        <div className={styles["App-Playlist"]}>
          <p>
            Playlist:
            <Playlist 
              playlistName={playlistName} 
              playlistTracks={playlistTracks} 
              onRemove={removeTrack}
              onNameChange={updatePlaylistName}
              onSave={savePlaylist}/>
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
