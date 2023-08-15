import React from 'react';
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

const AboutUs = () => {
    return (
        <div className='AboutUs w-full'>
            <div className='AboutUs__intro flex flex-row-reverse text-white mt-20 px-6'>
                <h2 className={`${myFont.className} text-7xl text-right w-8/12 leading-snug`}>
                    هدف ما نوآوری در صنعت بذر است و همتا نداریم
                </h2>
                <div className='flex flex-col items-center gap-14'>
                    <p className={`text-right w-10/12 font-light ${vazir.className} text-xl`}
                        style={{ direction: 'rtl', lineHeight: '1.8' }}
                    >
                        برنامه‌های تحقیقاتی ما متمرکز بر ارتقاء بهره‌وری بذر، بهینه‌سازی روش‌های تولید بذر، افزایش مقاومت در برابر آفات و بیماری‌ها، و بهبود ویژگی‌های کیفی و مشخصات فیزیولوژیکی بذرها می‌باشند.
                    </p>
                    <Image src={logo} alt='logo' />
                </div>
            </div>


            <div className='relative my-16'>
                <Image src={pic} alt='picture' className='w-full object-cover' style={{ height: '700px' }} />
                <Image src={play} alt='playIcons' className='absolute left-1/2 top-1/2'
                    style={{ transform: 'translate(-50%,-50%)' }}
                />
            </div>
            
            <AboutUsSection />

            <AccordionSection />
        </div>
    );
};

export default AboutUs;