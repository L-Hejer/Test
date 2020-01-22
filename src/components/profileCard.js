import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const ProfileCard = ({user}) => {
    const { name , phone, email,  username, address } = user;


    return (
      <div>
        <Card style={{ width: '18rem', height:'30rem', marginRight:'10px', marginBottom:'20px', marginTop:'30px', backgroundColor:'#231e39', borderRadius:'10px', border:'transparent', boxShadow:'0 10px 10px 0 rgba(0,0,0,0.2)' }}>
        <Card.Title className='name-letter' style={{fontSize: "60px"}}>{name[0]}</Card.Title>
  <Card.Body>
    <Card.Title style={{ margin:'0', color:'white'}}>{name}</Card.Title>
    <Card.Text style={{fontSize:'small', color:'white'}}>@{username}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush text-light" >
    <ListGroupItem style={{backgroundColor:'#231e39', borderTop:'1px solid white'}}>E-MAIL:<br/>{email}</ListGroupItem>
    <ListGroupItem style={{backgroundColor:'#231e39', borderTop:'1px solid white'}}>PHONE NUMBER:<br/>{phone}</ListGroupItem>
    <ListGroupItem style={{backgroundColor:'#231e39', borderTop:'1px solid white' , borderBottom:'1px solid white'}}>{address.street}, {address.city}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href={`/${user.id}`} ><button className="btn-card">View User's Posts</button></Card.Link>
    <button className="btn-card-follow">Follow</button>
  </Card.Body>
</Card>
      </div>
    );
  };
  
  export default ProfileCard;