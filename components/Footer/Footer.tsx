import React from 'react';
import localFont from 'next/font/local'
import Image from 'next/image';
import logo from '../../assets/Images/logo.png'
import arrow from '../../assets/Icons/arrow-2.svg'

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const Footer = () => {
    return (
        <div className='Footer w-full'>
            <div className='flex flex-row-reverse justify-center w-full gap-44 mt-32 justify-center'>
                <div className='Footer__rightSide flex flex-col gap-6'>
                    <div className='text-end flex flex-col gap-4'>
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
                    <div className='text-end flex flex-col gap-4'>
                        <h3 className={`Footer__rightSide__title text-3xl ${myFont.className}`} style={{ color: '#EBDAB2' }}> قوانین </h3>
                        <p className='Footer__rightSide__subtitle text-white text-xl'>
                            قوانین و مقررات
                        </p>
                        <p className='Footer__rightSide__subtitle text-white text-xl'>
                            شرایط و موارد قانونی
                        </p>
                    </div>
                </div>


                <div className='Footer_centerSide' style={{ transform: 'translatex(-80px)' }}>
                    <Image src={logo} alt='logo' unoptimized />
                </div>

                <div className='Footer_leftSide flex flex-col gap-16 text-right justify-center px-6'>
                    <h2 className={`text-white text-6xl ${myFont.className}`}> با ما در ارتباط باشید </h2>
                    <div className='Footer_leftSide__email flex flex-row-reverse items-center justify-between w-10/12 ml-auto gap-6'>
                        <input placeholder='ایمیل شما' className='outline-none bg-transparent text-white placeholder:text-white pb-1 text- placeholder:text-right w-full'
                            style={{ borderBottom: '1px solid white;', direction: 'ltr' }}
                        />
                        <div className='rounded-full bg-white'>
                            <Image src={arrow} alt='arrow' unoptimized className='w-16 p-4' />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-16' />
            <p className='text-white text-center mt-6 text-lg'> طراحی شده توسط زفره مدیا </p>
        </div>
    );
};

export default Footer;