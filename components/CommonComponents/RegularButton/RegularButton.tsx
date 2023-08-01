import React from 'react';

const RegularButton = (props: {
    text: string
}) => {
    const text = props.text
    return (
        <div className='text-base px-14 py-3' style={{ background: '#FFD074' , borderRadius : '30px' , color : '#000' }}>
            {text}
        </div>
    );
};

export default RegularButton;