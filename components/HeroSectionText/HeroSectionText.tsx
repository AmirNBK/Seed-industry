import React from 'react';
import localFont from 'next/font/local'
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import Link from 'next/link';

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const HeroSectionText = () => {
    return (
        <div
            className={`HeroSectionText left-1/2 top-1/2 translate-x-150 translate-y-150
            lg:translate-x-180 lg:translate-y-180
            items-center w-fit gap-6 whitespace-nowrap text-white absolute flex flex-col ${myFont.className}`}
            style={{top : '50%' , left : '50%' , transform:'translate(-50%,-110%)'}}
        >
            <div className='text-5xl md:text-8xl lg:text-9xl'>
                مسیرتان را
            </div>
            <div className='flex flex-row-reverse items-end gap-56'>
                <p className='text-5xl md:text-8xl lg:text-9xl'> با ما </p>
                <Link href={'#AboutUs'} className='lg:block hidden'>
                    <RegularButton text='از اینجا شروع کنید' />
                </Link>
            </div>
            <div className='text-5xl md:text-8xl lg:text-9xl'>
                ما شکوفا کنید
            </div>
            <Link href={'#AboutUs'} className='lg:hidden block'>
                <RegularButton text='از اینجا شروع کنید' />
            </Link>
        </div>
    );
};

export default HeroSectionText;