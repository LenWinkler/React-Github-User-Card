import React from 'react';
import axios from "axios";
import Card from "./components/Card";
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
    // axios
    // .get('https://api.github.com/users/lenwinkler')
    //   .then(res => {
    //     axios.get('https://api.github.com/users/lenwinkler/followers')
    //       .then(res => {
    //         console.log('followers get', res);
    //         this.setState({
    //           myFollowers: res.data
    //         })
    //       })
    //     console.log('my profile get', res);
    //     this.setState({
    //       me: res.data
    //     })
    //     console.log('my state', this.state.me);
    //     console.log('followers state', this.state.myFollowers)
    //   })
    //   .catch(err => console.log('my axios get error', err))
  }

  render() {
    console.log('followers state',this.state.myFollowers)
    return (
      <div className="App">
        <Title>Github User Card: <span>React Edition</span></Title>
        <MyDiv>
          <Card img={this.state.me.avatar_url} location={this.state.me.location} profile={this.state.me.html_url} followers={this.state.me.followers} following={this.state.me.following} bio={this.state.me.bio}/>
          <FollowersTitle>My Github followers:</FollowersTitle>
        </MyDiv>
        
        <FollowersDiv>
        {this.state.myFollowers.map(item => (
          <Card key={item.id}img={item.avatar_url} 
          location={item.location} 
          profile={item.html_url} 
          followers={item.followers} 
          following={item.following} 
          bio={item.bio}/>
        ))}
        </FollowersDiv>
      </div>
    );
  };
}
export default App;
