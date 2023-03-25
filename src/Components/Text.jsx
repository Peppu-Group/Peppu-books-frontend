import React from 'react';
import { Text as PdfText } from '@react-pdf/renderer';
import compose from '../styles/compose';
const Text = ({ className, pdfMode, children }) => {
    return (<>
      {pdfMode ? (<PdfText style={compose('span ' + (className ? className : ''))}>{children}</PdfText>) : (<span className={'span ' + (className ? className : '')}>{children}</span>)}
    </>);
};
export default Text;
