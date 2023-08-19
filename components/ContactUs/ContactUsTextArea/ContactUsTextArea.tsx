import React from 'react';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const ContactUsTextArea = (props: {
    placeholder: string
}) => {
    return (
        <div className={`ContactUsTextArea w-full text-white h-full ${vazir.className}`}>
            <textarea className='w-full h-full text-right p-4 bg-transparent placeholder:text-white'
            rows={8}
            style={{border : '1px solid #88DB44' , borderRadius : '26px'}}
            placeholder={props.placeholder} />
        </div>
    );
};

export default ContactUsTextArea;