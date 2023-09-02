import React, { useState } from 'react';
import localFont from 'next/font/local';
import BlogsItem from './BlogsItem/BlogsItem';
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import BubbleComponent from '../BubbleComponent/BubbleComponent';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' });

const Blogs = (props: {
    data: { title: string; color: string; category: any; }[];
    onHoverChange: (isHovered: boolean) => void;
    onHoverContainer: (isHovered: boolean) => void;
}) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    const convertedData = props.data.map((item) => ({
        title: item.title,
        color: item.color,
        categories: item.category.map((cat: any) => cat.categories),
    }));

    return (
        <div className='Blogs w-full mb-24 mt-16'>
            <BubbleComponent />
            <h2
                ref={ref}
                className={`${myFont.className} ${inView && 'animate__animated animate__fadeInDown animate__slower'} Blogs__title text-white text-5xl sm:text-7xl w-max ml-auto mr-12`}
            >
                اخبار و مقالات
            </h2>
            <div
                className={`Blogs_items mt-20 grid lg:grid-cols-2 grid-cols-1
                md:mr-12 gap-20 sm:mb-28 mb-16`}
            >
                {convertedData.map((item, index) => (
                    <BlogsItem
                        key={index}
                        title={item.title}
                        category={item.categories}
                        color={item.color}
                        onHoverChange={props.onHoverChange}
                        onHoverContainer={props.onHoverContainer}
                    />
                ))}
            </div>
            <div className='text-center w-full'>
                <RegularButton text='بیشتر بخوانید' link={'/blogs'} />
            </div>
        </div>
    );
};

export default Blogs;
