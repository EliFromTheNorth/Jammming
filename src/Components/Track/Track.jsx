import React from "react"
import styles from "./Track.module.css"


export default function Track(props) {
    function addOrDelete() {
        // return (
        //     <button className={["Add-or-delete"]}>{props.isRemoval ? "-" : "+"}</button>
        // )
        if (props.isRemoval) {
            return <button className={["Add-or-delete"]} onClick={removeTrack} >-</button>
        } else {
            return <button className={["Add-or-delete"]} onClick={passTrack} >+</button>
        }
    }

    function passTrack() {
        props.onAdd(props.track)
    }

    function removeTrack() {
        props.onRemove(props.track)
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
