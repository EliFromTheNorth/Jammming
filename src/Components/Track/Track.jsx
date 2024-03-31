import React from "react"
import styles from "./Track.module.css"


export default function Track(props) {
    function addOrDelete() {
        return (

            <button className={["Add-or-delete"]}>{props.isRemoval ? "-" : "+"}</button>
        )
    }

    return (
        <div className={styles.Track}>
            <div className={styles["Track-info"]}>  
                <h2>{props.track.name} {addOrDelete()}</h2>                 
                <h3>{props.track.artist} | {props.track.album}</h3>
            </div>
        </div>
    )
}
