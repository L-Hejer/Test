import React from "react";
import {Card, ListGroup} from 'react-bootstrap';

function ContactPosts({ user, posts }) {
    const { name = "", phone = "", email = "", id } = user;
  return (
    <div style={{backgroundColor:'#362f55'}}>
        <Card style={{backgroundColor:'#362f55', border:'transparent', color:'white'}}>
        <div className='user-card'>
        <Card.Title><h1>{name}</h1></Card.Title>
        <Card.Text><h5>Phone Number: {phone}</h5></Card.Text>
        <Card.Text><h5>E-mail: {email}</h5></Card.Text>
        </div> 
        </Card>
        <ListGroup className="list-group-flush">
      {posts.map(post => (
        <div className='contact-posts' style={{boxShadow:'0 10px 10px 0 rgba(0,0,0,0.2)' }}>
          <h3 className='post-title'>{post.title}</h3> 
          <p>{post.body}</p>
          <Card.Link href={`/${id}/${post.id}`} style={{color:'#03bfcb'}}>View Post's comments</Card.Link>
        </div>

      ))}
      </ListGroup>
    </div>
  );
}

export default ContactPosts;
