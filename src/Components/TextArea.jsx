import { React, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

const TextArea = ({ className, placeholder, value, onChange }) => {
    const [isHover, setIsHover] = useState(false);
    const [valueOfInput, setValueOfInput] = useState('');

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const onInputChange = (e) => {
        setValueOfInput(e.target.value);
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            value={valueOfInput || value}
            onChange={onInputChange}
        />
    );

}

export default TextArea
