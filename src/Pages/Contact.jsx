import React from 'react'
import Navbar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <main class="root">
            <nav className='fixed'>
                <Navbar />
            </nav>
            <div className='privacy-section'>
                <div className='body-header'>
                    <p className='header'>Contact Us!</p>
                </div>
            </div>
            <div className='consent-window'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your full name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Describe the problem</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <a href='mailto:ukpaiugochi0.com?subject=Support for PayTrack'><Button variant="primary" >
                        Submit
                    </Button></a>
                </Form>
            </div>
        </main>
    )
}

export default Contact