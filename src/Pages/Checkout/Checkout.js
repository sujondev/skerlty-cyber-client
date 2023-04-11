import React from 'react';
import './Checkout.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Checkout = () => {
    return (
        <div>
            <h1 className='text-white text-center mt-3 mb-4'>Plcae your order</h1>
            <Form className="w-75 mx-auto row mt-5">
                <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
                    <Form.Control className='order-feild' type="text" placeholder="Name" required />
                </Form.Group>

                <Form.Group className="mb-3 col-4" controlId="formBasicPassword">
                    <Form.Control className='order-feild' type="email" placeholder="email" required />
                </Form.Group>
                <Form.Group className="mb-3 col-4" controlId="formBasicPassword">
                    <Form.Control className='order-feild' type="text" placeholder="Phone" required />
                </Form.Group>
                <textarea className='mb-5 order-text-feild' name="" id="" cols="20" rows="5" placeholder='message'></textarea>
                <Button className='w-25 d-block mx-auto order-btn p-3' variant="primary" type="submit">
                    Place your order
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;