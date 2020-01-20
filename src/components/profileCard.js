import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const ProfileCard = ({user}) => {
    const { name = "", phone = "", email = "",  username = "" } = user;


    return (
      <div>
        <Card style={{ width: '18rem', height:'25rem', marginRight:'10px', marginBottom:'20px', marginTop:'30px' }}>
        <Card.Title className='name-letter'>{name[0]}</Card.Title>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>@ {username}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{email}</ListGroupItem>
    <ListGroupItem>{phone}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href={`/${user.id}`} >View User's Posts</Card.Link>
  </Card.Body>
</Card>
      </div>
    );
  };
  
  export default ProfileCard;