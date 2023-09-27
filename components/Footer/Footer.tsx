import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local'
import Image from 'next/image';
const myFont = localFont({ src: '../../assets/Fonts/BYekan+.ttf' })
const myFontBold = localFont({ src: '../../assets/Fonts/BYekan+ Bold.ttf' })
import logo from '../../assets/Images/logo.png'
import ColoredArrow from '../../assets/Icons/ColoredArrow'
import arrow from '../../assets/Icons/arrow.svg'
import Link from 'next/link';
import footerInfo from '../../assets/Images/footerInfo.png'
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import useWindowSize from '@/Hooks/innerSize';
const Footer = (props: {
    isProduct?: boolean
    animation?: boolean
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    const [isArrowActive, setIsArrowActive] = useState(false);


    const footerItems = [
        'سایت های مرتبط', 'موسسه تحقیقات ثبت وگواهی بذرونهال ', 'سازمان هواشناسی', 'دانشکده کشاورزی دانشگاه تهران',
        'سازمان حفظ نباتات', 'موسسه تحقیقات ثبت و گواهی بذرونهال', 'دانشکده کشاورزی دانشگاه تهران'
    ]

    const [svgWidth, setSvgWidth] = useState(0);
    const size = useWindowSize()
    useEffect(() => {
        if (inView) {
            setSvgWidth(213);
        }
    }, [inView]);


    return (
        <div className={`${myFont.className} Footer w-full bg-[#BAF98F]`} ref={ref}
        >

            <div className='Footer__contactUsSection flex flex-row-reverse items-center justify-between px-4 pt-8'>
                <div className='Footer__contactUsSection__right text-7xl flex flex-row-reverse items-center gap-4'>
                    <h2
                        ref={ref}
                        className={`${myFont.className} ${inView && 'animate__animated animate__fadeInDown animate__slower'} flex flex-row-reverse Blogs__title text-black text-5xl sm:text-8xl w-max ml-auto mr-12`}
                    >
                        با ما در <span className='text-[#78b944]'>
                            ارتباط
                            <svg ref={ref}
                                className="bottom-[-1.7rem] left-0 js-s-svg-fade mt-2" width={svgWidth} height="21" viewBox="0 0 213 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    transition: 'width 1s ease-in-out', transitionDelay: '1s'
                                }}
                            >
                                <path d="M0.986657 20.3029C47.0444 5.53886 138.047 -1.45319 212.564 2.5385" stroke="#78b944" style={{ strokeDashoffset: "0", strokeDasharray: 'none', animation: "fade 4s linear forwards" }}></path>
                            </svg>
                        </span>
                        <span className='mr-2'>
                            باشید
                        </span>
                    </h2>
                    <ColoredArrow color={'#78b944'} width={'w-20'} />
                </div>
                <div className='Footer__contactUsSection__left flex flex-col items-center'>
                    <Image src={logo} alt='logo' className='w-28' />
                    <p> پیشگامان صنعت و بذر </p>
                    <p> Pishgaman Sanat Va bazr Co. </p>
                </div>
            </div>

            <div className='mt-16'>
                <Image src={footerInfo} alt='info' unoptimized />
            </div>


            <div className='footer__downside flex flex-row-reverse items-baseline justify-between my-12 pb-8'>
                <div className='footer__pages px-4 grid grid-cols-2'>
                    {footerItems.map((item, index) => {
                        return (
                            <div className='footer__pages__items flex flex-row-reverse gap-4 items-center'>
                                <div className='bg-black w-2 h-2 rounded-full hover:opacity-100 opacity-50'>  </div>
                                <p className={`${index === 0 ? 'opacity-100 font-bold' : 'opacity-50'} cursor-pointer hover:opacity-100 text-2xl 
                            duration-500 text-[#183e33]`}
                                > {item} </p>
                            </div>
                        )
                    })}
                </div>

                <div>


                    <div className='Header__extraPart__languages bg-white w-fit p-2 rounded-lg relative text-white flex items-center gap-2 cursor-pointer'
                        onClick={() => setIsArrowActive(prevState => !prevState)}>
                        <p className='translate-y-px text-opacity-50 text-black'> EN </p>
                        <Image src={arrow} alt='arrow' className={`${isArrowActive ? 'arrow-active' : 'arrow'}`} />
                        <div className={`${isArrowActive ? 'opacity-100 h-20' : 'opacity-0	h-2'} transition-all duration-500 absolute`}
                            style={{
                                background: 'rgba(255, 255, 255, 0.7)', width: '4.5rem',
                                top: '0px', left: '-8px', borderRadius: '5px'
                            }}>
                            <p className={`${isArrowActive ? 'opacity-100 duration-1000' : 'opacity-0'} opacity-50 absolute bottom-1 left-2.5 text-black`}>
                                FA
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <style>
                {`
                .arrow {
                    transform: rotate(90deg);
                }
                
                
                .arrow-active {
                    -webkit-animation: rotate-90-left-cw 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: rotate-90-left-cw 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                }
                
                .arrow:not(:active) {
                    -webkit-animation: rotate-90-right-cw 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: rotate-90-right-cw 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                }
                
                @-webkit-keyframes rotate-90-left-cw {
                    0% {
                        -webkit-transform: rotate(90deg);
                        transform: rotate(90deg);
                    }
                
                    100% {
                        -webkit-transform: rotate(270deg);
                        transform: rotate(270deg);
                    }
                }
                
                @keyframes rotate-90-left-cw {
                    0% {
                        -webkit-transform: rotate(90deg);
                        transform: rotate(90deg);
                    }
                
                    100% {
                        -webkit-transform: rotate(270deg);
                        transform: rotate(270deg);
                    }
                }
                
                @-webkit-keyframes rotate-90-right-cw {
                    0% {
                        -webkit-transform: rotate(270deg);
                        transform: rotate(270deg);
                    }
                
                    100% {
                        -webkit-transform: rotate(90deg);
                        transform: rotate(90deg);
                    }
                }
                
                @keyframes rotate-90-right-cw {
                    0% {
                        -webkit-transform: rotate(270deg);
                        transform: rotate(270deg);
                    }
                
                    100% {
                        -webkit-transform: rotate(90deg);
                        transform: rotate(90deg);
                    }
                }
                `}
            </style>
        </div>
    );
};

export default Footer;