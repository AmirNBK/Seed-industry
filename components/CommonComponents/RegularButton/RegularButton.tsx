import React from 'react';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const RegularButton = (props: {
    text: string
    onClick?: () => void
}) => {
    const text = props.text
    const onClick = props.onClick
    return (
        <button
            onClick={onClick}
            className={`${vazir.className} text-xs md:text-base px-8 md:px-14 py-3`}
            style={{ background: '#FFD074', borderRadius: '30px', color: '#000' }}>
            {text}
        </button>
    );
};

export default RegularButton;