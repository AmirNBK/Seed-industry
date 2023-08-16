import React from 'react';
import localFont from 'next/font/local';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' });

const InfoContainer = (props: {
    title: string
    content: any
}) => {
    return (
        <div className='InfoContainer rounded-md w-10/12 px-6 py-10 my-12' style={{ backgroundImage: 'linear-gradient(40deg, rgba(83, 126, 49, 1) 0%, rgba(50, 66, 37, 1) 30%, rgba(50, 66, 37, 1) 60%, rgba(83, 126, 49, 1) 100%)' }}>
            <div className={`text-white text-right text-3xl ${myFont.className}`}>
                {props.title}
            </div>
            <div>
                {props.content}
            </div>
        </div>
    );
};

export default InfoContainer;