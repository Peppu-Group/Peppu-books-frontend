import React from 'react'
import Navbar from '../Components/Navbar'
import consent from '../assets/consent.png'
import Image from 'react-bootstrap/Image'

const Privacy = () => {
    return (
        <main class="root">
            <nav className='fixed'>
                <Navbar />
            </nav>
            <div className='privacy-section'>
                <div className='body-header'>
                    <p className='header'>Privacy</p>
                    <p>Policy</p>
                </div>
                <div className='first-paragragh'>
                    <p>We take your privacy seriously. We do not share or sell your information with anybody.</p>
                </div>
            </div>
            <div className='consent-window'>
                <div className='center'>
                <h2>Consent Window</h2>
                <p>When you install Peppubboks on your Google account, a consent window
                    will be shown for you to provide consent for the following:</p>
                </div>
                <footer className="page-footer font-small  pt-4 ">
                    <div className="container-fluid  text-left">
                        <div className="row">
                            <div className="col-md-5 mb-md-0 mb-6">
                                <Image fluid='true' src={consent} />
                            </div>
                            <div className="col-md-7 mb-md-0 mb-6 text">
                                <h4>Google Drive</h4>

                                <p>Create Peppubooks template for recording transactions.</p>

                                <p>Create folders to store invoices.</p>


                                <h4>Google Sheet</h4>

                                <p>See, create, edit and delete Peppubooks sheets.</p>


                                <h4>Script App(External Services)</h4>

                                <p>Fetch export link for invoice download.</p>

                                <p>Automatically send email reminders</p>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}
export default Privacy