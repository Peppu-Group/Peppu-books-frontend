import React from 'react'
import Navbar from '../Components/Navbar'
import Container from 'react-bootstrap/Container';


const Privacy = () => {
    return (
        <main class="root">
            <nav className='fixed'>
                <Navbar />
            </nav>
            <div className='privacy-section'>
                <Container fluid >
                    <div className='body-header'>
                        <p className='header'>Privacy</p>
                        <p>Policy</p>
                    </div>
                    <div className='first-paragragh'>
                        <p>We take your privacy seriously. We do not share or sell your information with anybody.</p>
                    </div>
                </Container>
            </div>
            
            
        </main>
    )
}
export default Privacy