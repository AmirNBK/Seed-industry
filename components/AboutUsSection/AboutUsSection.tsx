import React, { useEffect, useState } from 'react';
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import localFont from 'next/font/local'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BubbleComponent from '../BubbleComponent/BubbleComponent';
import useWindowSize from '@/Hooks/innerSize';
import { useInView } from 'react-intersection-observer';

const myFont = localFont({ src: '../../assets/Fonts/BYekan+.ttf' })
const myFontBold = localFont({ src: '../../assets/Fonts/BYekan+ Bold.ttf' })

const AboutUs = (props: {
    data: any
}) => {
    const size = useWindowSize()
    const [svgWidth, setSvgWidth] = useState(0);

    useEffect(() => {
        AOS.init();
    }, [])

    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            if (size.width) {
                if (size.width < 640) {
                    setSvgWidth(150);
                }
                else setSvgWidth(213);
            }
        }
    }, [inView]);

    return (
        <div
            className={`AboutUs md:p-0 px-4 ${myFont.className} md:items-end items-center mx-auto lg:mt-[-60px] mt-12 w-full md:w-4/5 lg:w-[65%] flex flex-col items-end xl:items-end w-8/12 gap-8 md:gap-8 mb-20`}
            id='AboutUs'
            style={{ marginTop: `${size.width && size.width < 768 ? '-370px' : ''}` }}
        >
            <BubbleComponent />
            <div>
                <p data-aos-duration="1000" data-aos-once={true} data-aos="fade-down" className='text-white text-5xl md:text-6xl w-max'>
                    {props.data.aboutUs[0].title.split(' ').map((word: string, index: number) => (
                        <span key={index} className={index === 0 ? 'text-[#78b944]' : ''}>{word}{index < props.data.aboutUs[0].title.split(' ').length - 1 ? ' ' : ''}</span>
                    ))}
                </p>
                <svg ref={ref}
                    className="bottom-[-1.7rem] left-0 js-s-svg-fade" width={svgWidth} height="21" viewBox="0 0 213 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{
                        transition: 'width 1s ease-in-out', transitionDelay: '1s'
                    }}
                >
                    <path d="M0.986657 20.3029C47.0444 5.53886 138.047 -1.45319 212.564 2.5385" stroke="#AAFC75" style={{ strokeDashoffset: "0", strokeDasharray: 'none', animation: "fade 4s linear forwards" }}></path>
                </svg>

            </div>
            <div className='flex flex-col items-end' data-aos="fade-right" data-aos-duration="1000" data-aos-once={true}>
                <p
                    className={`${myFontBold.className} text-white text-xl md:text-4xl md:text-right text-center rtl mb-6 leading-loose`}
                    style={{ direction: 'rtl' }}
                    dangerouslySetInnerHTML={{
                        __html: props.data.aboutUs[0].description.replace(
                            /پیشگامان صنعت و بذر/g,
                            '<span class="text-[#78b944]">پیشگامان صنعت و بذر</span>'
                        ),
                    }}
                ></p>

                <div className='md:block flex justify-center md:w-full w-full'>
                    {size.width && size.width < 640 ?
                        <RegularButton text='ادامه مطلب' link={'/about-us'} position='center' width={210} />
                        :
                        <RegularButton text='ادامه مطلب' link={'/about-us'} position='right' width={210} />
                    }
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
