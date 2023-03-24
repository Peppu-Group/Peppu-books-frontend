import { React } from 'react';
import TextArea from './TextArea';


const Input = ({ qty, rate }) => {

    return (
        <div className='box'>
            <TextArea
                value='Item Description'
                className='mb-lg box-align-right'
            />
            <TextArea
                value={2 || qty}
                className='mb-sm box-align-left'
            />
            <TextArea
                value={100 || rate}
                className='mb-sm box-align-left'
            />
            <TextArea
                value={200 || qty * rate}
                className='mb-sm box-align-left'
            />
        </div>
    );
}

export default Input