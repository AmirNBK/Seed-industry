import React, { lazy, useEffect } from 'react';
import logo from '../../assets/Icons/fintech-logo.svg'
import Image from 'next/image';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
import pic from '../../assets/Images/aboutPic.jpeg'
import play from '../../assets/Images/play.svg'
import AboutUsSection from './AboutUsSection/AboutUsSection';
import AccordionSection from './AccordionSection/AccordionSection';
import History from './History/History';
import Foundation from '../Foundation/Foundation';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import animations from "../../assets/animations/greenAnimation.json";
import Lottie from "lottie-react";
import { useInView } from 'react-intersection-observer';


const AboutUs = (props: {
    data: any
}) => {
    useEffect(() => {
        AOS.init();
    }, [])

    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    return (
        <div className='AboutUs w-full mb-6'>
            <div className='AboutUs__intro lg:mr-20 flex xl:flex-row-reverse xl:items-baseline items-center flex-col text-white mt-6 sm:mt-32 sm:px-6'>
                <h2
                    data-aos-duration="3000" data-aos-once={true} data-aos="fade-left"
                    className={`${myFont.className} text-4xl sm:text-7xl xl:text-right text-center w-8/12 leading-snug`}>
                    {props.data.intro[0].title}
                </h2>
                <div className='flex flex-col items-center gap-6 sm:gap-14 xl:m-0 mt-6 sm:mt-16'
                    data-aos-duration="3000" data-aos-once={true} data-aos="fade-right"
                >
                    <p className={`xl:text-right text-center w-10/12 font-light ${vazir.className} text-sm sm:text-xl`}
                        style={{ direction: 'rtl', lineHeight: '1.8' }}
                    >
                        {props.data.intro[0].description}
                    </p>
                    <div className='absolute' style={{ opacity: '0.25' }}>
                        <Lottie animationData={animations} loop={true} />
                    </div>
                    <Image src={logo} alt='logo' className='md:w-fit w-40' />
                </div>
            </div>


            <div className='relative my-16' ref={ref} >
                <Image src={pic} alt='picture' className='w-full object-cover sm:h-700' loading='lazy' />
                <Image src={play} alt='playIcons' className='sm:w-auto w-2/12 absolute left-1/2 top-1/2'
                    style={{ transform: 'translate(-50%,-50%)' }}
                />
            </div>
            <AboutUsSection text={props.data.aboutUsSection} />
            <AccordionSection data={props.data.strongPoints[0].point} />
            <div>
                <History data={props.data.history[0].slide} />

            </div>
            <div>
                <Foundation data={props.data.foundation[0]} />
            </div>
            <div className='mt-40'>
                <Footer animation={false} />
            </div>
        </div>
    );
};

export default AboutUs;