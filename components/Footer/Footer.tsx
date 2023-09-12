import React, { useEffect } from 'react';
import localFont from 'next/font/local'
import Image from 'next/image';
import logo from '../../assets/Images/logo.png'
import arrow from '../../assets/Icons/arrow-2.svg'
import Link from 'next/link';
import { Vazirmatn } from 'next/font/google';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
const vazir = Vazirmatn({ subsets: ['latin'] });

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const Footer = (props: {
    isProduct?: boolean
    animation?: boolean
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <div className='Footer w-full' ref={ref}
        >
            <div className='Footer_centerSide xl:hidden block'>
                <Image src={logo} alt='logo' unoptimized className='mx-auto' />
            </div>
            <div className='flex flex-wrap flex-row-reverse justify-center w-full gap-12 xl:gap-44 mt-12 xl:mt-32 justify-center'>
                {(inView || props.isProduct) &&
                    <div className={`${(inView && props.animation) && 'animate__animated animate__fadeInRight animate__slower'} Footer__rightSide flex flex-col gap-6`}
                    >
                        <div className='text-end flex flex-col gap-4'>
                            <h3 className={`Footer__rightSide__title text-3xl ${myFont.className}`} style={{ color: '#EBDAB2' }}> فهرست صفحات </h3>
                            <Link href={'/'}
                                className={`${vazir.className} Footer__rightSide__subtitle sm:text-right text-center text-white text-xl`}>
                                صفحه اصلی
                            </Link>
                            <Link href={'about-us'} className={`${vazir.className} Footer__rightSide__subtitle sm:text-right text-center text-white text-xl`}>
                                درباره ما
                            </Link>
                            <Link href={'/products'} className={`${vazir.className} Footer__rightSide__subtitle sm:text-right text-center text-white text-xl`}>
                                محصولات
                            </Link>
                        </div>
                        <div className='text-end flex flex-col gap-4'>
                            <h3 className={`Footer__rightSide__title sm:text-right text-center text-3xl ${myFont.className}`} style={{ color: '#EBDAB2' }}> قوانین </h3>
                            <p className={`${vazir.className} Footer__rightSide__subtitle sm:text-right text-center text-white text-xl`}>
                                قوانین و مقررات
                            </p>
                            <p className={`${vazir.className} Footer__rightSide__subtitle sm:text-right text-center text-white text-xl`}>
                                شرایط و موارد قانونی
                            </p>
                        </div>
                    </div>
                }

                {inView &&
                    <div className={`${(inView && props.animation) && 'animate__animated animate__slower animate__fadeInUp'} Footer_centerSide items-center xl:flex hidden translate-x-140`}
                        style={{ transform: 'translatex(-80px)' }}>
                        <Image src={logo} alt='logo' className='w-40' unoptimized />
                    </div>
                }


                {inView &&

                    <div className={`${(inView && props.animation) && 'animate__animated animate__slower animate__fadeInLeft'} Footer_leftSide flex flex-col gap-16 text-right justify-center px-6`}>
                        <h2 className={`text-white text-5xl md:text-6xl text-center ${myFont.className}`}> با ما در ارتباط باشید </h2>
                        <div className='Footer_leftSide__email flex flex-row-reverse items-center justify-between w-10/12 mx-auto md:ml-auto gap-6'>
                            <input placeholder='ایمیل شما' className={`${vazir.className} outline-none bg-transparent text-white placeholder:text-white pb-1 text- placeholder:text-right w-full`}
                                style={{ borderBottom: '1px solid white', direction: 'ltr' }}
                            />
                            <div className='rounded-full bg-white'>
                                <Image src={arrow} alt='arrow' unoptimized className='w-16 p-4' />
                            </div>
                        </div>
                    </div>
                }
            </div>
            {inView &&
                <div className={`${(inView && props.animation) && 'animate__animated animate__slower animate__fadeInUp animate__delay-2s'} `}>
                    <hr className='mt-16' />
                    <p className={`text-white text-center mt-6 text-lg ${vazir.className}`}> طراحی شده توسط زفره مدیا </p>
                </div>
            }
        </div>
    );
};

export default Footer;