import React from "react";
import {Card, ListGroup} from 'react-bootstrap';

function ContactPosts({ user, posts }) {
    const { name = "", phone = "", email = "" } = user;
  return (
    <div>
        <Card>
        <div className='user-card'>
        <Card.Title><h1>{name}</h1></Card.Title>
        <Card.Text><h4>Phone Number: {phone}</h4></Card.Text>
        <Card.Text><h4>E-mail: {email}</h4></Card.Text>
        </div> 
        </Card>
        <ListGroup className="list-group-flush">
      {posts.map(post => (
        <div className='contact-posts'>
          <h3 className='post-title'>{post.title}</h3> <p>{post.body}</p>
        </div>

      ))}
      </ListGroup>
    </div>
  );
}

export default ContactPosts;
