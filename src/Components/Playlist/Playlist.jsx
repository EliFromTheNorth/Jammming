import React from "react"
import styles from "./Playlist.module.css"
import Tracklist from "../Tracklist/Tracklist"

export default function Playlist(props) {
    function handleNameChange({target}) {
        props.onNameChange(target.value)
    }

    return (
        <div className={styles.Playlist}>
            playlist
            <input defaultValue={"New Playlisttt"}  onChange={handleNameChange} />
            <div>
               <Tracklist 
                userSearchResults={props.playlistTracks} 
                onRemove={props.onRemove}
                isRemoval={true}
                />
            </div>
            <button>save to spotify</button>
        </div>
    )
}