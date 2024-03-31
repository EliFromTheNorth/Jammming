import React from "react"
import styles from "./SearchBar.module.css"

export default function SearchBar() {
    return (
        <div className={styles.SearchBar}>
            <input 
                type="text" 
                placeholder="Enter song, artist or album" />
            <button className={styles.SearchButton}>
                Search
            </button>
        </div>
    )
}