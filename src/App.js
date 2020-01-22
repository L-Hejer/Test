import React from 'react';
import axios from 'axios';
import { Route } from "react-router-dom";

import ProfileCard from './components/profileCard';
import NavBar from './components/navBar';
import ContactPosts from './components/contact-posts';
import PostComments from './components/post-comments';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    users:[],
    posts:[],
    comments:[]

  }

  getAllUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => this.setState({ users: res.data }))
      .catch(error => {console.error(error); alert("Can not fetch users list")});
  };

  componentDidMount = () => {
    this.getAllUsers();
    this.getPostsById();
    this.getComments();
  };

  getPostsById = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => this.setState({ posts: res.data }))
      .catch(error => {console.error(error); alert("Can not fetch user's posts")});
  };

  getComments = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(res => this.setState({ comments: res.data}))
    .catch(error => {console.error(error); alert("Can not fetch post's comments")});
  }


  render(){
  return (
    <div>
    <NavBar/>

  
    <div className="App">
      <Route
      exact path ="/"
      render = {() => this.state.users.map( (el,i) => <ProfileCard key={i} user={el} />)}
      />
    </div>

     {this.state.users.map( user => <Route 
     exact 
     path={`/${user.id}`}
     render = {() => <ContactPosts key={user.id} user={user} posts={this.state.posts.filter(post=> post.userId === user.id)}/>}
     /> )}

     {this.state.posts.map( post => <Route
     exact
     path={`/:id/${post.id}`}
     render = {() => <PostComments key={post.is} comments={this.state.comments.filter(comment => comment.postId === post.id)}/>}
     />)}
    
    </div>
  )};
  }

export default App;
