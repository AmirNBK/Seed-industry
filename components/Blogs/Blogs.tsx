import React from 'react';
import localFont from 'next/font/local';
import BlogsItem from './BlogsItem/BlogsItem';
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import BubbleComponent from '../BubbleComponent/BubbleComponent';

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' });

const Blogs = (props: {
    data: { title: string; color: string; category: any }[];
}) => {
    const convertedData = props.data.map((item) => ({
        title: item.title,
        color: item.color,
        categories: item.category.map((cat: any) => cat.categories),
    }));

    return (
        <div className='Blogs w-full mb-24 mt-16'>
            <BubbleComponent />
            <h2
                className={`${myFont.className} Blogs__title text-white text-5xl sm:text-7xl w-max ml-auto mr-12`}
                data-aos-duration="1000"
                data-aos-once={true}
                data-aos="fade-down"
            >
                اخبار و مقالات
            </h2>
            <div
                data-aos-duration="1000"
                data-aos-once={true}
                data-aos="fade-left"
                className='Blogs_items mt-20 grid lg:grid-cols-2 grid-cols-1 md:mr-12 gap-20 sm:mb-28 mb-16'
            >
                {convertedData.map((item, index) => (
                    <BlogsItem
                        key={index}
                        title={item.title}
                        category={item.categories}
                        color={item.color}
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
