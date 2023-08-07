import React from 'react';
import localFont from 'next/font/local'
import Image from 'next/image';
import logo from '../../assets/Images/logo.png'
import arrow from '../../assets/Icons/arrow-2.svg'

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const Footer = () => {
    return (
        <div className='Footer flex flex-row-reverse justify-end w-full gap-44'>
            <div className='Footer__rightSide flex flex-col gap-6'>
                <div className='text-end flex flex-col gap-2'>
                    <h3 className={`Footer__rightSide__title text-3xl ${myFont.className}`} style={{ color: '#EBDAB2' }}> فهرست صفحات </h3>
                    <p className='Footer__rightSide__subtitle text-white text-xl'>
                        صفحه اصلی
                    </p>
                    <p className='Footer__rightSide__subtitle text-white text-xl'>
                        درباره ما
                    </p>
                    <p className='Footer__rightSide__subtitle text-white text-xl'>
                        کاتالوگ
                    </p>
                </div>
                <div className='text-end flex flex-col gap-2'>
                    <h3 className={`Footer__rightSide__title text-3xl ${myFont.className}`} style={{ color: '#EBDAB2' }}> قوانین </h3>
                    <p className='Footer__rightSide__subtitle text-white text-xl'>
                        قوانین و مقررات
                    </p>
                    <p className='Footer__rightSide__subtitle text-white text-xl'>
                        شرایط و موارد قانونی
                    </p>
                </div>
            </div>


            <div className='Footer_centerSide'>
                <Image src={logo} alt='logo' unoptimized/>
            </div>

            <div className='Footer_leftSide'>
                <h2 className={`text-white text-6xl ${myFont.className}`}> با ما در ارتباط باشید </h2>
                <div className='Footer_leftSide__email flex flex-row-reverse items-center'>
                    <input placeholder='ایمیل شما'/>
                    <div className='rounded-full bg-white'>
                    <Image src={arrow} alt='arrow' unoptimized/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;