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
import instagram from '../../assets/Icons/instagramFooter.svg'
import linkedin from '../../assets/Icons/linkedinFooter.svg'
import telegram from '../../assets/Icons/telegramFooter.svg'
import aparat from '../../assets/Icons/aparat.svg'
import { useInView } from 'react-intersection-observer';
import useWindowSize from '@/Hooks/innerSize';
const Footer = (props: {
    isProduct?: boolean
    animation?: boolean
}) => {
    const { ref, inView } = useInView({
        triggerOnce: false
    });

    const [isArrowActive, setIsArrowActive] = useState(false);


    const footerItems = [
        'سایت های مرتبط', 'موسسه تحقیقات ثبت وگواهی بذرونهال ', 'سازمان هواشناسی', 'دانشکده کشاورزی دانشگاه تهران',
    ]

    const footerItems2 = [
        'سازمان حفظ نباتات', 'موسسه تحقیقات ثبت و گواهی بذرونهال', 'دانشکده کشاورزی دانشگاه تهران'
    ]

    const socialMedia = [instagram, linkedin, telegram, aparat]

    const [svgWidth, setSvgWidth] = useState(0);

    const [secondSvgWidth, setSecondSvgWidth] = useState(0);

    const [footerRadius, setFooterRadius] = useState(0);

    const [contactUs, setContactUs] = useState(false);
    const size = useWindowSize()




    useEffect(() => {
        if (inView) {
            setSvgWidth(213);
            setSecondSvgWidth(70);
            if (size.width && size.width > 640) {
                setFooterRadius(150);
            }
        }
        else setFooterRadius(0)
    }, [inView]);

    return (
        <div className={`${myFont.className} Footer sm:mb-0 -mb-8 w-full ${(size.width && size.width < 640) && 'w-screen'} bg-[#BAF98F]`} ref={ref}
            style={{
                borderTopRightRadius: `${footerRadius}px`,
                borderTopLeftRadius: `${footerRadius}px`,
                transition: 'border-radius 1s ease-in-out',
            }}
        >
            <div className='Footer__contactUsSection flex flex-row flex-wrap lg:flex-row-reverse items-center justify-center lg:justify-between px-4 pt-16 lg:gap-0 gap-10'>
                <div className='Footer__contactUsSection__right text-7xl flex flex-row-reverse items-center gap-4'>
                    <h2
                        ref={ref}
                        className={`${myFont.className} flex
                        flex-row-reverse Blogs__title text-black text-4xl md:text-5xl lg:text-8xl w-max ml-auto mr-12`}
                    >
                        با ما در <span className='text-[#78b944] mr-2'>
                            ارتباط

                            {(size.width && size.width > 900)
                                &&
                                <svg ref={ref}
                                    className="bottom-[-1.7rem] left-0 js-s-svg-fade mt-2" width={svgWidth} height="21" viewBox="0 0 213 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        transition: 'width 1s ease-in-out', transitionDelay: '1s'
                                    }}
                                >
                                    <path d="M0.986657 20.3029C47.0444 5.53886 138.047 -1.45319 212.564 2.5385" stroke="#78b944" style={{ strokeDashoffset: "0", strokeDasharray: 'none', animation: "fade 4s linear forwards" }}></path>
                                </svg>
                            }
                        </span>
                        <span className='mr-2'>
                            باشید
                        </span>
                    </h2>
                    <ColoredArrow
                        onClick={() => {
                            setContactUs(!contactUs);
                        }}
                        color={contactUs ? 'black' : '#78b944'}
                        width={'w-10 md:w-20'}
                        rotate={contactUs ? '-rotate-90' : ''}
                        alternativeClassnames={contactUs ? `${size.width && size.width > 640 && '-translate-x-[40px]'}` : ''}
                    />

                </div>
                <div className='Footer__contactUsSection__left flex flex-col items-center'>
                    <Image src={logo} alt='logo' className='w-28' />
                    <p> پیشگامان صنعت و بذر </p>
                    <p> Pishgaman Sanat Va bazr Co. </p>
                </div>
            </div>

            <div className={`${contactUs ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight'}
                rounded-full w-fit pr-8 pl-16 sm:pl-80 lg:mt-0 mt-10 ml-auto mr-20 py-5 text-xl`}
                style={{ background: 'rgba(255,255,255,0.5)' }}
            >
                roya.vali@pishgamanbazr.com
            </div>

            <div className={`${contactUs && 'mt-16'}`}>
                <Image src={footerInfo} alt='info' unoptimized />
            </div>


            <div className='footer__downside flex flex-row-reverse items-baseline justify-between mt-12 px-4 flex-wrap lg:gap-0 gap-6'>
                <div className='footer__pages px-4 flex flex-col'>
                    {footerItems.map((item, index) => {
                        return (
                            <div className='footer__pages__items'>
                                <p className={`${index === 0 ? 'opacity-100 font-bold' : 'opacity-50'} cursor-pointer flex flex-row-reverse gap-4  items-center hover:opacity-100 text-xl sm:text-2xl 
                            duration-500 text-[#183e33]`}
                                >
                                    <div className='relative'
                                    >
                                        <div className='bg-[#8dda50] w-2 h-2 rounded-full'
                                            style={{ transform: 'translate(3px, 4px)' }}
                                        >

                                        </div>
                                        <div className='rounded-full bg-black absolute animate-pulse-fast scale-up'
                                            style={{ width: '15px', height: '15px', left: '-1px', top: '0px', opacity: '0.15' }}
                                        >

                                        </div>
                                        <div className='rounded-full bg-black absolute animate-pulse-fast scale-up'
                                            style={{ width: '25px', height: '25px', left: '-5.5px', top: '-4.5px', opacity: '0.1' }}
                                        >

                                        </div>
                                    </div>
                                    {item} </p>
                            </div>
                        )
                    })}
                </div>

                <div className='footer__pages px-4 flex flex-col'>
                    {footerItems2.map((item, index) => {
                        return (
                            <div className='footer__pages__items'>
                                <p className={`opacity-50 cursor-pointer flex flex-row-reverse gap-4  items-center hover:opacity-100 text-xl sm:text-2xl
                            duration-500 text-[#183e33]`}
                                >
                                    <div className='relative'
                                    >
                                        <div className='bg-[#8dda50] w-2 h-2 rounded-full'
                                            style={{ transform: 'translate(3px, 4px)' }}
                                        >

                                        </div>
                                        <div className='rounded-full bg-black absolute animate-pulse-fast scale-up'
                                            style={{ width: '15px', height: '15px', left: '-1px', top: '0px', opacity: '0.15' }}
                                        >

                                        </div>
                                        <div className='rounded-full bg-black absolute animate-pulse-fast scale-up'
                                            style={{ width: '25px', height: '25px', left: '-5.5px', top: '-4.5px', opacity: '0.1' }}
                                        >

                                        </div>
                                    </div>
                                    {/* <span className='bg-black w-2 h-2 rounded-full'>  </span> */}
                                    {item} </p>
                            </div>
                        )
                    })}
                </div>

                <div className='flex flex-row gap-8'>
                    <div className='footer__extraPart__languages bg-white w-fit p-2 rounded-lg relative text-white flex items-center gap-2 cursor-pointer'
                        onClick={() => setIsArrowActive(prevState => !prevState)}>
                        <p className='translate-y-px text-opacity-50 text-black'> EN </p>
                        <Image src={arrow} alt='arrow' className={`${isArrowActive ? 'arrow-active' : 'arrow'}`} />
                        <div className={`${isArrowActive ? 'opacity-100 h-20' : 'opacity-0	h-2'} transition-all duration-500 absolute`}
                            style={{
                                background: 'rgba(255, 255, 255, 0.7)', width: '4rem',
                                top: '0px', left: '0px', borderRadius: '5px'
                            }}>
                            <p className={`${isArrowActive ? 'opacity-100 duration-1000' : 'opacity-0'} opacity-50 absolute bottom-1 left-2.5 text-black`}>
                                FA
                            </p>
                        </div>
                    </div>

                    <div className='footer__socialMedia flex flex-row items-center gap-6'>
                        {socialMedia.map((item) => {
                            return (
                                <Image src={item} alt={item} className='w-5' />
                            )
                        })}
                    </div>
                </div>

            </div>


            <p className='px-4 -translate-y-[20px]'>
                زفره مدیا
                <svg ref={ref}
                    className="-bottom-[50px] js-s-svg-fade mt-1 rotate-270" width={secondSvgWidth} height="10" viewBox="0 0 213 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{
                        transition: 'width 1s ease-in-out', transitionDelay: '1s'
                    }}
                >
                    <path d="M0.986657 20.3029C47.0444 5.53886 138.047 -1.45319 212.564 2.5385" stroke="#78b944" style={{ strokeDashoffset: "0", strokeDasharray: 'none', animation: "fade 4s linear forwards" }}></path>
                </svg>
            </p>


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