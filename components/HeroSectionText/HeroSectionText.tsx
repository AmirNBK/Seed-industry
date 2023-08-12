import React from 'react';
import localFont from 'next/font/local'
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import Link from 'next/link';

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const HeroSectionText = () => {
    return (
        <div
            className={`HeroSectionText left-1/2 top-1/2 w-fit items-end gap-6 whitespace-nowrap text-white absolute flex flex-col ${myFont.className}`}
            style={{ transform: 'translate(-60%, -60%)' }}
        >
            <div className='text-9xl'>
                مسیرتان را
            </div>
            <div className='flex flex-row-reverse items-end gap-56'>
                <p className='text-9xl'> با ما </p>
                <Link href={'#AboutUs'}>
                    <RegularButton text='از اینجا شروع کنید' />
                </Link>
            </div>
            <div className='text-9xl'>
                ما شکوفا کنید
            </div>
        </div>
    );
};

export default HeroSectionText;