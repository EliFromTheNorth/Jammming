import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import Track from '../Track/Track';
import Tracklist from '../Tracklist/Tracklist';


function App() {
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

      <div className={styles["App-SearchResults"]}>
        <p>Search results:</p>
        <SearchResults />
        <p>Tracklist:</p>
        <Tracklist />
        <p>Track:</p>
        <Track />
      </div>

      <div className={styles["App-Playlist"]}>
        <p>
          Playlist:
          <Playlist />
        </p>
      </div>
      
    </div>
  );
}

export default App;
