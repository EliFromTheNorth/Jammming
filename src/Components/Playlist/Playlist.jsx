import React from "react"
import styles from "./Playlist.module.css"
import Tracklist from "../Tracklist/Tracklist"

export default function Playlist() {
    return (
        <div className={styles.Playlist}>
            playlist
            <div>
               <Tracklist />
            </div>
            <button>save to spotify</button>
        </div>
    )
}