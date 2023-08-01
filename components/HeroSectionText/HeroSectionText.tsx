import React from 'react';
import localFont from 'next/font/local'
import RegularButton from '../CommonComponents/RegularButton/RegularButton';

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const HeroSectionText = () => {
    return (
        <div className={`HeroSectionText left-1/2 top-1/2 w-fit items-end gap-6 w-full whitespace-nowrap text-white absolute flex flex-col ${myFont.className}`}
        style={{zIndex : '30' , transform : 'translate(-60%, -60%)'}}
        >
            <div className='text-9xl'>
                مسیرتان را
            </div>
            <div className='flex flex-row-reverse items-end gap-56'>
                <p className='text-9xl'> با ما </p>
                <RegularButton text='از اینجا شروع کنید'/>
            </div>
            <div className='text-9xl'>
                ما شکوفا کنید
            </div>
        </div>
    );
};

export default HeroSectionText;