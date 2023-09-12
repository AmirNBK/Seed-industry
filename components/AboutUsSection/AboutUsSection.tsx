import React, { useEffect } from 'react';
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import localFont from 'next/font/local'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BubbleComponent from '../BubbleComponent/BubbleComponent';
import useWindowSize from '@/Hooks/innerSize';

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const AboutUs = (props: {
    data: any
}) => {
    const size = useWindowSize()

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={`AboutUs md:p-0 px-4 ${myFont.className} md:items-end items-center mx-auto lg:mt-[-60px] mt-12 w-full md:w-4/5 lg:w-3/5 flex flex-col items-end xl:items-start xl:flex-row-reverse w-8/12 gap-8 md:gap-16 mb-20`}
            id='AboutUs'
            style={{ marginTop: `${size.width && size.width < 768 ? '-370px' : ''}` }}
        >
            <BubbleComponent />
            <div>
                <p data-aos-duration="1000" data-aos-once={true} data-aos="fade-down" className='text-white text-5xl md:text-7xl w-max'>
                    {props.data.aboutUs[0].title}
                </p>
            </div>
            <div className='flex flex-col items-end' data-aos="fade-right" data-aos-duration="1000" data-aos-once={true}>
                <p className='text-white text-xl md:text-3xl md:text-right text-center rtl mb-6 leading-10' style={{ direction: 'rtl' }}>
                    {props.data.aboutUs[0].description}
                </p>
                <div className='md:block flex justify-center md:w-fit w-full'>
                    <RegularButton text='بیشتر بخوانید' />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;