import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    width: 40%;
    padding: 1rem;
    box-shadow: 1px 1px 1px 1px grey;
    border-left: 1px solid grey;
`
const CardImg = styled.img`
    width: 100%;
`

const Card = props => {
    console.log('card props', props)
    return (
        <CardDiv className="card">
            <div className="image-div">
                <CardImg src={props.img} alt="user" />
            </div>
            <div className="card-text">
                <p>{`Location: ${props.location}`}</p>
                <p>{`Profile: ${props.profile}`}</p>
                <p>{`Followers: ${props.followers}`}</p>
                <p>{`Following: ${props.following}`}</p>
                <p>{`Bio: ${props.bio}`}</p>
            </div>
        </CardDiv>
    )
}

export default Card;