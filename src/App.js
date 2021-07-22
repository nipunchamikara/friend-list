import React from "react";
import Friend from "./Friend";

// list of friends
const friends = [
    {name: "Pubudu", quote:"Linux4Lyf", age:30},
    {name: "Sandul", quote:"Making these $TACK$ overflow", age:20},
    {name: "Ravindu", quote:"If it works, it works", age:15},
    {name: "Kaveesha", quote:"Apple4Lyf", age:10},
    {name: "Ramindu", quote:"Not enough monitors", age:100}
];

export default function App() {
    const friendList = friends.map((friend, index) => <Friend name={friend.name} quote={friend.quote} age={friend.age} img={`assets/${index + 1}.jpg`}/>)
    return (
        <div class="row col-lg-6 offset-lg-3" id="friend-list">
            <h1 id="heading">Friend List</h1>
            {friendList}
        </div>
    );
}