import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="" />
            <div className="card-info">
                <h2>{props.band}</h2>
                <p>{props.genre}</p>
                <a href={props.bandcamp}>bandcamp</a>
            </div>
            <div className="card-live">
                <p>{props.date} at {props.location}</p>
            </div>
        </div>
    )
}

