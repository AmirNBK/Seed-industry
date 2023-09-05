import React from 'react';
import localFont from 'next/font/local';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' });
import light from '../../../assets/Images/card-light.png'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const InfoContainer = (props: {
    title: string
    content: any
    link: string
}) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    return (
        <div ref={ref} className={`${inView && 'animate__animated animate__fadeInLeft'} InfoContainer overflow-hidden relative rounded-md w-full md:w-10/12 px-6 py-10 my-6`}
            id={`${props.link}`} style={{ boxShadow: '0px -23px 60px rgba(0, 0, 0, 0.25)', }}>
            <Image src={light} alt='light' className='absolute' style={{ right: '-20%', top: '-50%', width: '540px' }} />
            <Image src={light} alt='light' className='absolute' style={{ right: '40%', top: '0%' }} />
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