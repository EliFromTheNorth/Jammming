import React, {useState} from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';


function App() {
  const [searchResults, setSearchResults] = useState([
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
  ]);

  return (
  
    <div className={styles.App}>

      <header className={styles["App-header"]}>
        <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>

      <div className={styles["App-Bar"]}>
        <p>
          <SearchBar />
        </p>
      </div>


      <div className={styles.Mainbox}>
        <div className={styles["App-SearchResults"]}>
          <p>Search results:</p>
          <SearchResults userSearchResults={searchResults}/>
        </div>

        <div className={styles["App-Playlist"]}>
          <p>
            Playlist:
            <Playlist />
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
