import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { login } = useContext(AuthContext)


    const handlelogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                toast.success('login successfull')
                form.reset()
            })
    }

    return (
        <div>
            <Form onSubmit={handlelogin} className='w-50 mx-auto bg-white p-4 rounded mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="password" required />
                </Form.Group>
                <Button className='w-25 d-block mx-auto p-2 fw-bold' variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-center mt-3'>new to whiz cyber <Link to='/signup'>Signup</Link></p>
            </Form>
        </div>
    );
};

export default Login;