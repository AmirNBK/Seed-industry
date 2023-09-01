import React from 'react';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const ContactUsInput = (props: {
    placeholder: string
}) => {
    return (
        <div className={`ContactUsInput ${vazir.className}`}>
            <input placeholder={props.placeholder} className='outline-none bg-transparent text-white placeholder:text-white pb-1 text-right placeholder:text-right w-full'
                style={{ borderBottom: '1px solid #88DB44', direction: 'ltr' }}
            />
        </div>
    );
};

export default ContactUsInput;