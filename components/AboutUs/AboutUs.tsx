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

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='AboutUs w-full'>
            <div className='AboutUs__intro flex xl:flex-row-reverse xl:items-baseline items-center flex-col text-white mt-6 sm:mt-20 sm:px-6'>
                <h2
                    data-aos-duration="1200" data-aos-once={true} data-aos="fade-left"
                    className={`${myFont.className} text-4xl sm:text-7xl xl:text-right text-center w-8/12 leading-snug`}>
                    هدف ما نوآوری در صنعت بذر است و همتا نداریم
                </h2>
                <div className='flex flex-col items-center gap-6 sm:gap-14 xl:m-0 mt-6 sm:mt-16'
                    data-aos-duration="1200" data-aos-once={true} data-aos="fade-right"
                >
                    <p className={`xl:text-right text-center w-10/12 font-light ${vazir.className} text-sm sm:text-xl`}
                        style={{ direction: 'rtl', lineHeight: '1.8' }}
                    >
                        برنامه‌های تحقیقاتی ما متمرکز بر ارتقاء بهره‌وری بذر، بهینه‌سازی روش‌های تولید بذر، افزایش مقاومت در برابر آفات و بیماری‌ها، و بهبود ویژگی‌های کیفی و مشخصات فیزیولوژیکی بذرها می‌باشند.
                    </p>
                    <Image src={logo} alt='logo' className='md:w-fit w-40' />
                </div>
            </div>


            <div className='relative my-16'>
                <Image src={pic} alt='picture' className='w-full object-cover sm:h-700' loading='lazy' />
                <Image src={play} alt='playIcons' className='sm:w-auto w-2/12 absolute left-1/2 top-1/2'
                    style={{ transform: 'translate(-50%,-50%)' }}
                />
            </div>
            <AboutUsSection />
            <AccordionSection />
            <div data-aos="flip-right" data-aos-duration="2500" data-aos-once={true}>
                <History />

            </div>
            <div data-aos="flip-right" data-aos-duration="2500" data-aos-once={true}>
                <Foundation />
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;