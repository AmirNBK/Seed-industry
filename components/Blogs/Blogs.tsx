import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import BlogsItem from './BlogsItem/BlogsItem';
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import BubbleComponent from '../BubbleComponent/BubbleComponent';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
const myFont = localFont({ src: '../../assets/Fonts/BYekan+.ttf' })
const myFontBold = localFont({ src: '../../assets/Fonts/BYekan+ Bold.ttf' })

const Blogs = (props: {
    data: { title: string; color: string; category: any; }[];
    onHoverChange: (isHovered: boolean) => void;
    onHoverContainer: (isHovered: boolean) => void;
}) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });
    const [svgWidth, setSvgWidth] = useState(0);


    const convertedData = props.data.map((item) => ({
        title: item.title,
        color: item.color,
        categories: item.category.map((cat: any) => cat.categories),
    }));

    useEffect(() => {
        if (inView) {
            setSvgWidth(180);
        }
    }, [inView]);


    return (
        <div className='Blogs w-full mb-24 mt-16'>
            <BubbleComponent />
            <h2
                ref={ref}
                className={`${myFont.className} ${inView && 'animate__animated animate__fadeInDown animate__slower'} Blogs__title text-white text-5xl sm:text-7xl w-max ml-auto mr-12`}
            >
                اخبار و <span className='text-[#78b944]'>
                    مقالات
                    <svg ref={ref}
                        className="bottom-[-1.7rem] left-0 js-s-svg-fade" width={svgWidth} height="21" viewBox="0 0 213 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                        style={{
                            transition: 'width 1s ease-in-out', transitionDelay: '1s'
                        }}
                    >
                        <path d="M0.986657 20.3029C47.0444 5.53886 138.047 -1.45319 212.564 2.5385" stroke="#AAFC75" style={{ strokeDashoffset: "0", strokeDasharray: 'none', animation: "fade 4s linear forwards" }}></path>
                    </svg>
                </span>
            </h2>
            <div
                className={`Blogs_items mt-20 grid lg:grid-cols-2 grid-cols-1
                md:mr-12 gap-20 sm:mb-28 mb-16`}
            >
                {convertedData.map((item, index) => (
                    <div className='flex flex-col'>
                        <BlogsItem
                            id={index}
                            key={index}
                            title={item.title}
                            category={item.categories}
                            color={item.color}
                            onHoverChange={props.onHoverChange}
                            onHoverContainer={props.onHoverContainer}
                        />
                        <div className={`${inView && 'animate__animated animate__fadeInRight animate__slower'}`}>
                            <RegularButton width={200} text='ادامه مطلب' position='right' />
                        </div>
                    </div>
                ))}
            </div>
            <div className=' w-full'>
                <RegularButton text='بیشتر بخوانید' link={'/blogs'} position='center' width={250} />
            </div>
        </div>
    );
};

export default Blogs;
