import React from 'react'
import Navbar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    let handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        window.location.href = "ukpaiugochi0@gmail.com"
      }

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
                <Form onSubmit={handleSubmit}>
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

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Describe the problem</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                   <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </main>
    )
}

export default Contact