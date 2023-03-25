import { React, useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from '../Pages/Invoice';

const Download = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(false);
        const timeout = setTimeout(() => {
            setShow(true);
        }, 500);
        return () => clearTimeout(timeout);
    });
    return (
        <div>
            {show && (
            <PDFDownloadLink
                document={<Invoice/>}
                fileName={'Mee.pdf'}
                aria-label="Save PDF"
            >
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : <button className={'download-pdf'}></button>
                }
            </PDFDownloadLink>)}
        </div>
    );
};
export default Download;
