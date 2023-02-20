import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();
    let handleSubmit = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_6fgtutf', 'template_6ttzglg', form.current, 'gaqDvZ1uPiEy0Z2CO')
            .then((result) => {
                toast.success(`${result.text} Successfully contacted Peppubooks 👌`);
            }, (error) => {
                toast.error(`${error} An error occurred 👌`);
            });
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
                <Form ref={form} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your full name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" name='from_name' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Describe the problem</Form.Label>
                        <Form.Control as="textarea" rows={3} name='message' />
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