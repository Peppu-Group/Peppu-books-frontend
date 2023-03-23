import { React, useState } from 'react'
import { Page, Image, PDFViewer, Text, View, Font, Document, StyleSheet } from '@react-pdf/renderer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TextareaAutosize from 'react-textarea-autosize'


Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const Subtitle = ({ children, ...props }) => (
    <Text style={styles.subtitle} {...props}>
        {children}
    </Text>
);



const TextArea = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const onInputChange = (e) => {
        return e.target.value;
    };

    const boxStyle = {
        resize: 'none',
        background: '#FFFFFF',
        border: 0,
        backgroundColor: isHover ? 'lightblue' : 'white',
        resize: 'none',
        margin: '0 0 0 50px'
    };
    return (
        <TextareaAutosize
            maxRows={4}
            placeholder="Your Company"
            style={boxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );

}

const Invoice = () => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const onInputChange = (e) => {
        return e.target.value;
    };

    const boxStyle = {
        resize: 'none',
        background: '#FFFFFF',
        border: 0,
        backgroundColor: isHover ? 'lightblue' : 'white',
        resize: 'none',
        margin: '0 0 0 50px'
    };

    return (
        <body className='inv-none'>
            <div className='page'>
                <div className='inv-logo'>
                    Logo
                </div>
                <div className='comp-name style'>
                    <TextArea/>
                </div>
                <div className='comp-name style'>
                    <TextArea/>
                </div>
            </div>
        </body>

    )
}

export default Invoice