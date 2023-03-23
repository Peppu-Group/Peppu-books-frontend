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



const TextArea = ({ className, placeholder, value, onChange }) => {
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
            style={boxStyle}
            className={className || ''}
            placeholder={placeholder || ''}
            value={value || ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );

}

const Invoice = () => {

    return (
        <body className='inv-none'>
            <div className='page'>
                <div className='inv-logo'>
                    Logo
                </div>
                <div className='side'>
                    <TextArea
                        placeholder='Your Company'
                        className={'style'}
                    />
                </div>
                <div>
                    <TextArea
                        placeholder='INVOICE'
                        className='inv' />
                </div>
                <div className=''>
                    <TextArea
                        placeholder='Your name'
                        className=''
                    />
                </div>
                <div className=''>
                    <TextArea
                        placeholder={`Company's Address`}
                        className=''
                    />
                </div>
                <div className=''>
                    <TextArea
                        placeholder='City, State Zip Code'
                        className=''
                    />
                </div>
                <div className=''>
                    <TextArea
                        placeholder='Country'
                        className=''
                    />
                </div>
                <div className='separator'>
                </div>
                <div className=''>
                    <TextArea
                        value='Bill To:'
                        className=''
                    />
                    <TextArea
                        value='Invoice No:'
                        className='mb-sm'
                    />
                    <TextArea
                        placeholder={'INV-0001'}
                        className='mb-md'
                    />
                </div>
                <div className=''>
                    <TextArea
                        placeholder={`Client's Name:`}
                        className=''
                    />
                    <TextArea
                        value='Invoice Date:'
                        className='mb-sm'
                    />
                    <TextArea
                        placeholder={`Today's Date`}
                        className='mb-md'
                    />
                </div>
                <div className=''>
                    <TextArea
                        placeholder={`Client's Address:`}
                        className=''
                    />
                    <TextArea
                        value='Due Date:'
                        className='mb-sm'
                    />
                    <TextArea
                        placeholder={`Due Date`}
                        className='mb-md'
                    />
                </div>
                <div className=''>
                    <TextArea
                        placeholder={`City, State Zip Code`}
                        className=''
                    />
                </div>
                <div className=''>
                    <TextArea
                        placeholder={`Country`}
                        className=''
                    />
                </div>
            </div>
        </body>

    )
}

export default Invoice