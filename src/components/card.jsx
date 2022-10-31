import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="" className="card-img" width="710" height="420" />
            <div className="card-text">
                <h2>{props.band}</h2>
                <p>{props.genre}</p>
                <p>{props.date} at {props.location}</p>
                <a href={props.bandcamp}>bandcamp</a>
            </div>
        </div>
    )
}
