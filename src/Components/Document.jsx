import React from 'react';
import { Document as PdfDocument } from '@react-pdf/renderer';
const Document = ({ pdfMode, children }) => {
    return <>{pdfMode ? <PdfDocument>{children}</PdfDocument> : <>{children}</>}</>;
};
export default Document;
