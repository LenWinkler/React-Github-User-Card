import React from "react";
import axios from "axios";
import { CardDiv, CardImg, CardP } from "../Style";

class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            follower: {}
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.login}`)
            .then(res => {
                this.setState({
                    follower: res.data
                })
            })
    }

    render() {
        return (
            <CardDiv className="card">
                <div className="image-div">
                    <CardImg src={this.state.follower.avatar_url} alt="user" />
                </div>
                <div className="card-text">
                    <CardP>{`Location: ${this.state.follower.location}`}</CardP>
                    <CardP>{`Profile: ${this.state.follower.html_url}`}</CardP>
                    <CardP>{`Followers: ${this.state.follower.followers}`}</CardP>
                    <CardP>{`Following: ${this.state.follower.following}`}</CardP>
                    <CardP>{`Bio: "${this.state.follower.bio}"`}</CardP>
                </div>
            </CardDiv>
        )
    }

}

export default FollowerCard;