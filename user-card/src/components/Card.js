import React from "react";
import { CardDiv, CardImg, CardP } from "../Style";


const Card = props => {
    return (
        <CardDiv className="card">
            <div className="image-div">
                <CardImg src={props.img} alt="user" />
            </div>
            <div className="card-text">
                <CardP>{`Location: ${props.location}`}</CardP>
                <CardP>{`Profile: ${props.profile}`}</CardP>
                <CardP>{`Followers: ${props.followers}`}</CardP>
                <CardP>{`Following: ${props.following}`}</CardP>
                <CardP>{`Bio: "${props.bio}"`}</CardP>
            </div>
        </CardDiv>
    )
}

export default Card;