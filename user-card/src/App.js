import React from 'react';
import axios from "axios";
import Card from "./components/Card";
import FollowerCard from "./components/FollowerCard";
import './App.css';
import styled from "styled-components"

const Title = styled.h1`
  font-size: 3rem;
`
const MyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid black;
`

const FollowersTitle = styled.h2`
  margin: 4rem 0;
`

const FollowersDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Footer = styled.footer`
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: .8rem;
`

class App extends React.Component {
  state = {
    me: {},
    myFollowers: [],
  }

  async componentDidMount() {
    const user = await axios.get('https://api.github.com/users/lenwinkler')
    const followers = await axios.get('https://api.github.com/users/lenwinkler/followers')
    this.setState({
      me: user.data,
      myFollowers: followers.data
    })
  }

  render() {
    return (
      <div className="App">
        <Title>Github User Card: <span>React Edition</span></Title>
        <MyDiv>
          <Card img={this.state.me.avatar_url} location={this.state.me.location} profile={this.state.me.html_url} followers={this.state.me.followers} following={this.state.me.following} bio={this.state.me.bio}/>
          <FollowersTitle>My Github followers:</FollowersTitle>
        </MyDiv>
        
        <FollowersDiv>
        {this.state.myFollowers.map(item => (
          <FollowerCard key ={item.id} login={item.login}/>
        ))}
        </FollowersDiv>
        <Footer>© 2019 Len Winkler</Footer>
      </div>
    );
  };
}
export default App;
