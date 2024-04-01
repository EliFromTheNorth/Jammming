import React from "react"
import styles from "./SearchResults.module.css"
import Tracklist from "../Tracklist/Tracklist"

export default function SearchResults(props) {
    console.log(props.userSearchResults);
    const arr = []
    return (
        <div className={styles["Search-Results"]}>
            SearchResults
            <Tracklist userSearchResults={props.userSearchResults} isRemoval={false} onAdd={props.onAdd}/>
        </div>
    )
}