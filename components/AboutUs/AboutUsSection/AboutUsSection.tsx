import Circle from '@/components/CommonComponents/Circle/Circle';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
import { Vazirmatn } from 'next/font/google';
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
const vazir = Vazirmatn({ subsets: ['latin'] });
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import useWindowSize from '@/Hooks/innerSize';

const AboutUsSection = (props: {
    text: string
}) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });
    const size = useWindowSize()

    return (
        <div className='AboutUsSection flex lg:flex-row-reverse flex-col my-20 md:my-40 w-10/12 mx-auto'
            ref={ref}
        >
            {inView &&
                <>
                    <BubbleComponent />
                    <div className='AboutUsSection__title flex-1 lg:m-0 mb-4'>
                        <div className={`flex flex-row items-center gap-2 justify-center sm:justify-end
                ${(inView && size.width && size.width > 768) && 'animate__animated animate__fadeInRight animate__slow'}`}

                        >
                            <p className={`text-white ${myFont.className} text-2xl sm:text-xl`}
                            > درباره ما </p>
                            <Circle color='#AAFC75' width={13} height={13} />
                        </div>
                    </div>
                    <div className={`${vazir.className} AboutUsSection__description 
            ${(inView && size.width && size.width > 768) && 'animate__animated animate__fadeInLeft animate__slow '}
            font-light sm:text-right text-center text-white text-base sm:text-2xl`}
                        style={{ direction: 'rtl', flex: '4', lineHeight: '55px' }}
                    >
                        {props.text}
                    </div>
                </>
            }
        </div>
    );
};

export default AboutUsSection;