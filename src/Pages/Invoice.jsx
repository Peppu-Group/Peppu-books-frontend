import { React, useState } from 'react'
import { PDFDownloadLink, Document, Page, View, Text } from '@react-pdf/renderer';
import TextArea from '../Components/TextArea';
import Input from '../Components/Input';

const Invoice = () => {
    const [inputList, setInputList] = useState([]);

    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Input key={inputList.length} />));
    };

    return (
        <Document className='inv-none'>
            <Page className='page'>
                <div className='inv-logo'>
                    <Text>Logo</Text>
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
                <div className='parent'>
                    <TextArea
                        value='Item Description'
                        className='mb-lg align-left'
                    />
                    <TextArea
                        value='Qty'
                        className='mb-sm align-right'
                    />
                    <TextArea
                        value='Rate'
                        className='mb-sm align-right'
                    />
                    <TextArea
                        value='Amount'
                        className='mb-sm align-right'
                    />
                </div>
                <Input />
                {inputList}
                <div className='input-bttn'>
                    <button onClick={onAddBtnClick}>Add New Item</button>
                </div>
                <div>
                    <div >
                        <TextArea
                            className='mb-lg box-align-right'
                        />
                        <TextArea
                            className='mb-sm box-align-left'
                        />
                        <TextArea
                            value='Sub-Total'
                            className='mb-sm box-align-left'
                        />
                        <TextArea
                            value={200 || qty * rate}
                            className='mb-sm box-align-left'
                        />
                    </div>
                    <div >
                        <TextArea
                            className='mb-lg box-align-right'
                        />
                        <TextArea
                            className='mb-sm box-align-left'
                        />
                        <TextArea
                            value='Sales Tax'
                            className='mb-sm box-align-left'
                        />
                        <TextArea
                            value={20 || qty * rate}
                            className='mb-sm box-align-left'
                        />
                    </div>
                    <div >
                        <TextArea
                            className='mb-lg box-align-right'
                        />
                        <TextArea
                            className='mb-sm box-align-left'
                        />
                        <TextArea
                            value='Total'
                            className='mb-sm box-align-left'
                        />
                        <TextArea
                            value={220 || qty * rate}
                            className='mb-sm box-align-left'
                        />
                    </div>
                    <div className='mg notes'>
                        <TextArea
                            className='bd mb-xl'
                            value={'Notes'}
                        />
                        <TextArea
                            className='mb-xl'
                            value={'It was great doing business with you.'}
                        />
                    </div>
                    <div className='mg notes'>
                        <TextArea
                            className='bd mb-xl'
                            value={'Terms & Conditions'}
                        />
                        <TextArea
                            className='mb-xl'
                            value={'Please make the payment by the due date.'}
                        />
                    </div>
                </div>
               
            </Page>

        </Document>

    )
}

export default Invoice