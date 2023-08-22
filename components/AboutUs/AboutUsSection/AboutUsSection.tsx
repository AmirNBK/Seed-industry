import Circle from '@/components/CommonComponents/Circle/Circle';
import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const AboutUsSection = () => {
    return (
        <div className='AboutUsSection flex lg:flex-row-reverse flex-col my-20 md:my-40 w-10/12 mx-auto'>
            <div className='AboutUsSection__title flex-1 lg:m-0 mb-4'>
                <div className='flex flex-row items-center gap-2 justify-center sm:justify-end'
                    data-aos-duration="1500" data-aos-once={true} data-aos="fade-left"
                >
                    <p className={`text-white ${myFont.className} text-2xl sm:text-xl`}
                    > درباره ما </p>
                    <Circle color='#AAFC75' width={13} height={13} />
                </div>
            </div>
            <div className={`${vazir.className} AboutUsSection__description font-light sm:text-right text-center text-white text-base sm:text-2xl`}
                style={{ direction: 'rtl', flex: '4', lineHeight: '55px' }}
                data-aos-duration="1500" data-aos-once={true} data-aos="fade-right"
            >
                شرکت پیشگامان صنعت و بذر با بیش از ۳۵ سال سابقه، فعالیت خود را با واردات در زمینه بذور هیبرید زراعی ،سبزی و صیفی و علوفه ای آغاز کرده است. سپس برای بهبود عملکرد و تغذیه گیاهی به واردات کود های شیمیایی و آلی ، پودری و مایع با فرمولاسیون نوین اقدام نموده است و امروزه با هدف ارتقاءِ سطح تخصصی کشاورزی و آورده های نوین در امر بذور پیوندی و با بهره گیری از خلاقیت و نو آوری تصمیم بر ایجاد تحولی مثبت در این زمینه را دارد
            </div>
        </div>
    );
};

export default AboutUsSection;