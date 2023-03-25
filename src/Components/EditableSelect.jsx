import React, { useState } from 'react';
import { Text } from '@react-pdf/renderer';
import compose from '../styles/compose';
const EditableSelect = ({ className, options, placeholder, value, onChange, pdfMode, }) => {
    const [isEditing, setIsEditing] = useState(false);
    return (<>
      {pdfMode ? (<Text style={compose('span ' + (className ? className : ''))}>{value}</Text>) : (<>
          {isEditing ? (<select className={'select ' + (className ? className : '')} value={value} onChange={onChange ? (e) => onChange(e.target.value) : undefined} onBlur={() => setIsEditing(false)} autoFocus={true}>
              {options?.map((option) => (<option key={option.text} value={option.value}>
                  {option.text}
                </option>))}
            </select>) : (<input readOnly={true} type="text" className={'input ' + (className ? className : '')} value={value || ''} placeholder={placeholder || ''} onFocus={() => setIsEditing(true)}/>)}
        </>)}
    </>);
};
export default EditableSelect;
