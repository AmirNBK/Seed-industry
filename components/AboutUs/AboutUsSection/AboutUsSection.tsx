import Circle from '@/components/CommonComponents/Circle/Circle';
import React, { useCallback, useEffect, useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
import { Vazirmatn } from 'next/font/google';
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
const vazir = Vazirmatn({ subsets: ['latin'] });
import 'animate.css';

const AboutUsSection = (props: {
    text: string
}) => {
    const [scrollY, setScrollY] = useState(0);

    const onScroll = useCallback(() => {
        const { pageYOffset, scrollY } = window;
        setScrollY(window.pageYOffset);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <div className='AboutUsSection flex lg:flex-row-reverse flex-col my-20 md:my-40 w-10/12 mx-auto'>
            <BubbleComponent />
            <div className='AboutUsSection__title flex-1 lg:m-0 mb-4'>
                <div className={`flex flex-row items-center gap-2 justify-center sm:justify-end
                ${scrollY > 490 && 'animate__animated animate__fadeInRight animate__slow'}`}

                >
                    <p className={`text-white ${myFont.className} text-2xl sm:text-xl`}
                    > درباره ما </p>
                    <Circle color='#AAFC75' width={13} height={13} />
                </div>
            </div>
            <div className={`${vazir.className} AboutUsSection__description 
            ${scrollY > 490 && 'animate__animated animate__fadeInLeft animate__slow '}
            font-light sm:text-right text-center text-white text-base sm:text-2xl`}
                style={{ direction: 'rtl', flex: '4', lineHeight: '55px' }}
            >
                {props.text}
            </div>
        </div>
    );
};

export default AboutUsSection;