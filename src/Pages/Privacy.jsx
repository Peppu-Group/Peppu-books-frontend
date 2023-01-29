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
            <div >
                <h2>Policy</h2>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of
                    Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
                    and use of information in accordance with this Privacy Policy.</p>

                <p>Peppubooks ("us", "we", or "our") operates the https://www.peppubooks.com website (the "Service").</p>
                <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
                    Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions. </p>
            </div>
            
                <div className='center'>
                    <h2>Types of Data collected</h2>
                    <p>When you install Peppubboks on your Google account, a consent window
                        will be shown for you to provide consent for the following:</p>
                </div>

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
                <div >
                    <h2>Methods of processing Data</h2>
                    <p>Peppubooks doesn't store user personal information or date. All data is stored in the user's drive.</p>
                    <p>Transactions recorded by the user as well as their client's information are not stored or processed by us.
                        Instead, all of this data are under your control in your Google account (Google Sheet, Google Drive, Gmail).
                    </p>
                </div>
                <div>
                    <h2>Deleting Account</h2>
                    <p>If your personal information changes, or if you no longer desire our service, 
                        you may delete or deactivate it by uninstalling our Google add-on</p>
                    <p>
                    1. Go to the Google Workspace Marketplace Manage apps page
                    </p>
                    <p>
                    2. Next to Peppubooks, click the menu icon
                    </p>
                    <p>
                    3. From the drop down menu, click Uninstall
                    </p>
                </div>
                <div>
                    <h2>Changes to Policy</h2>
                    <p>
                    This Privacy Policy is subject to occasional revision, and we reserve the right to modify this Privacy Policy relating to Peppubooks at any time, 
                    effective upon posting of an updated version of this Privacy Policy. This Policy is effective from 30th January, 2023.
                    </p>
                </div>
            </div>
        </main>
    )
}
export default Privacy