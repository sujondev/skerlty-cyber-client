import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, details, _id } = service
    return (
        <div className='col-lg-4 col-md-6 col-12  text-white'>
            <Card style={{ width: '22rem', backgroundColor: "#1d233c" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/checkout/${_id}`}><Button className='order-btn'>Orders</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;