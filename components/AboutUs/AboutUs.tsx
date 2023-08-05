import React from 'react';
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const AboutUs = () => {
    return (
        <div className={`AboutUs ${myFont.className} mx-auto flex flex-row-reverse w-8/12 gap-16 mb-20`}
        style={{marginTop : '-60px'}}
        >
            <div>
                <p className='text-white text-7xl w-max'> درباره ما </p>
            </div>
            <div className='flex flex-col items-end'>
                <p className='text-white text-3xl text-right rtl mb-6 leading-10' style={{direction : 'rtl'}}>
                    شرکت پیشگامان صنعت و بذر با بیش از ۱۵ سال تجربه در حوزه‌ی کشاورزی و بذر، به عنوان یکی از پیشروان صنعت، به ارائه محصولات با کیفیت و نوآورانه متمرکز است.
                </p>
                <RegularButton text='بیشتر بخوانید' />
            </div>
        </div>
    );
};

export default AboutUs;