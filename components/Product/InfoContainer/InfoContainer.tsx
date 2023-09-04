import React from 'react';
import localFont from 'next/font/local';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' });
import light from '../../../assets/Images/card-light.png'
import Image from 'next/image';

const InfoContainer = (props: {
    title: string
    content: any
    link: string
}) => {
    return (
        <div className='InfoContainer rounded-md w-full md:w-10/12 px-6 py-10 my-6' data-aos-duration="1500" data-aos-once={true} data-aos="fade-right" id={`${props.link}`} style={{ boxShadow: '0px -23px 60px rgba(0, 0, 0, 0.25)', }}>
            {/* <Image src={light} alt='light' className='absolute' style={{ right: '-10%', top: '-50%', width: '540px' }} /> */}
            {/* <Image src={light} alt='light' className='absolute' style={{ right: '30%', top: '-40%' }} /> */}
            <div className={`text-white text-right text-3xl ${myFont.className}`}>
                {props.title}
                meow
            </div>
            <div>
                {props.content}
            </div>
        </div>
    );
};

export default InfoContainer;