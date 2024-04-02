import React from "react"
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
    const [term, setTerm] = React.useState("")

    function passTerm() {
        props.onSearch(term)
    }

    function handleTermState({target}) {
        setTerm(target.value)
    }

    return (
        <div className={styles.SearchBar}>
            <input 
                type="text" 
                placeholder="Enter song, artist or album" 
                onChange={handleTermState}
            />
            <button 
                className={styles.SearchButton}
                onClick={passTerm}
            >
                Search
            </button>
        </div>
    )
}