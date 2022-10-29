import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-title">
                <h2>{props.band}</h2>
                <a href={props.bandcamp}>bandcamp</a>
            </div>
            <div className="card-info">
                
            </div>
        </div>
    )
}

