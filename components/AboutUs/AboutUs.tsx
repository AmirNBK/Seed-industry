import React from 'react';
import logo from '../../assets/Icons/fintech-logo.svg'
import Image from 'next/image';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const AboutUs = () => {
    return (
        <div className='AboutUs w-full'>
            <div className='AboutUs__intro flex flex-row-reverse text-white mt-20 px-6'>
                <h2 className={`${myFont.className} text-7xl text-right w-8/12 leading-snug`}>
                    هدف ما نوآوری در صنعت بذر است و همتا نداریم
                </h2>
                <div className='flex flex-col items-center gap-14'>
                    <p className={`text-right leading-relaxed w-10/12 font-light ${vazir.className} text-xl font-`}
                    style={{direction : 'rtl'}}
                    >
                        برنامه‌های تحقیقاتی ما متمرکز بر ارتقاء بهره‌وری بذر، بهینه‌سازی روش‌های تولید بذر، افزایش مقاومت در برابر آفات و بیماری‌ها، و بهبود ویژگی‌های کیفی و مشخصات فیزیولوژیکی بذرها می‌باشند.
                    </p>
                    <Image src={logo} alt='logo'/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;