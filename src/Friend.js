import React from "react";

export default function Friend(props) {
    return (
        <div className="friend col-md-4 col-6">
            <div className="card">
                <img src={props.img} alt="Pepe Profile"></img>
                <span className="desc">
                    <h3>{props.name}</h3>
                    <q>{props.quote}</q>
                    <p>Age: {props.age}</p>
                </span>
            </div>
        </div>
    )
}