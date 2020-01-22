import React from "react";
import {ListGroup, ListGroupItem} from 'react-bootstrap';

function PostComments({ comments }) {
  return (
    <ListGroup>
    <div style={{backgroundColor:'#362f55'}}>
      {comments.map(comment => (
        <div className="comments" style={{boxShadow:'0 10px 10px 0 rgba(0,0,0,0.2)' }}>
          <ListGroupItem style={{backgroundColor:'#231e39', color:'#03bfcb', borderBottom:'none'}}><h6>{comment.email}</h6></ListGroupItem>
          <ListGroupItem style={{backgroundColor:'#231e39', borderBottom:'none'}}><h3>{comment.name}</h3></ListGroupItem>
          <ListGroupItem style={{backgroundColor:'#231e39'}}><p>{comment.body}</p></ListGroupItem>
        </div>
      ))}
    </div>
    </ListGroup>
  );
}

export default PostComments;



{/* <ListGroup className="list-group-flush">
      {posts.map(post => (
        <div className='contact-posts'>
          <h3 className='post-title'>{post.title}</h3> 
          <p>{post.body}</p>
          <Card.Link href={`/${id}/${post.id}`} style={{color:'#03bfcb'}}>View Post's comments</Card.Link>
        </div>

      ))}
      </ListGroup> */}