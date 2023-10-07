import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import BlogsItem from './BlogsItem/BlogsItem';
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import BubbleComponent from '../BubbleComponent/BubbleComponent';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import useWindowSize from '@/Hooks/innerSize';
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
    const size = useWindowSize()
    const [svgWidth, setSvgWidth] = useState(0);

    const convertedData = props.data.map((item) => ({
        title: item.title,
        color: item.color,
        categories: item.category.map((cat: any) => cat.categories),
    }));

    useEffect(() => {
        if (inView) {
            if (size.width) {
                if (size.width < 640) {
                    setSvgWidth(250);
                }
                else setSvgWidth(180);
            }
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
                        className="bottom-[-1.7rem] left-0 js-s-svg-fade" width={svgWidth}
                        height={`${size.width && size.width < 640 ? 50 : 21} `} viewBox="0 0 213 21" fill="none" xmlns="http://www.w3.org/2000/svg"
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
                        <div className={`${inView && 'animate__animated animate__fadeInRight animate__slower'} ${size.width && size.width < 640 && 'mt-12'}`}>
                            {size.width && size.width < 640 ?
                                <RegularButton width={200} text='ادامه مطلب' position='center' />
                                :
                                <RegularButton width={200} text='ادامه مطلب' position='right' />
                            }
                        </div>
                    </div>
                ))}
            </div>
            <div className=' w-full text-center'>
                <div className={`${myFont.className} text-xl cursor-pointer`}>
                    <div className="MoreButton px-6">
                        <span className="label-up">بیشتر بخوانید</span>
                        <span className="label-up">بیشتر بخوانید</span>
                    </div>
                </div>
            </div>


            <style>
                {
                    `
                    .MoreButton {
                        display:inline-block;
                        height:65px;
                        line-height:60px;
                        overflow:hidden;
                        position:relative;
                        text-align:center;
                        border : 1px solid #AAFC75;
                        color:white;
                        border-radius:999px;
                        transition:1s;
                      }
                      
                      .label-up {
                        display:block;
                        margin:0px 30px;
                        height:100%;
                        position:relative;
                        top:0%;
                        transition:0.4s;
                      }
                      
                      .MoreButton:hover .label-up {
                        top:-100%;
                      }
                    `
                }
            </style>
        </div>
    );
};

export default Blogs;
