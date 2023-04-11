import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { createuser } = useContext(AuthContext)
    const handleSingup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createuser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('signup successfull')
                console.log(user);
                form.reset()
            })

    }
    return (
        <div>
            <Form onSubmit={handleSingup} className='w-50 mx-auto bg-white p-4 rounded mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name </Form.Label>
                    <Form.Control name="name" type="text" placeholder="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="password" required />
                </Form.Group>
                <Button className='w-25 d-block mx-auto p-2 fw-bold' variant="primary" type="submit">
                    Sign up
                </Button>
                <p className='text-center mt-3'>Not SignUp yet <Link to='/login'>login</Link></p>
            </Form>
        </div>
    );
};

export default Signup;