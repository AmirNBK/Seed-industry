import React from 'react';

import localFont from 'next/font/local'
import BlogsItem from './BlogsItem/BlogsItem';

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const Blogs = () => {
    return (
        <div className='Blogs w-full mb-32 mt-16'>
            <h2 className={`${myFont.className} Blogs__title text-white text-5xl sm:text-7xl w-max ml-auto mr-12`}>
                اخبار و مقالات
            </h2>
            <div className='Blogs_items mt-20 flex flex-row mr-12 gap-16 sm:mb-44 mb-16 lg:flex-nowrap flex-wrap'>
                <BlogsItem title='آخرین اخبار درباره صنعت بذر و پیشگامان این صنعت را میتوانید در این پست بخوانید'
                    category={['اخبار روز', 'دسته بندی 2']} color='#44A5DB'
                />
                <BlogsItem title='آخرین اخبار درباره صنعت بذر و پیشگامان این صنعت را میتوانید در این پست بخوانید'
                    category={['اخبار روز', 'دسته بندی 1']} color='#FFD0D0'
                />
            </div>
            <div className='Blogs_items sm:mt-20 flex flex-row mr-12 gap-16 lg:flex-nowrap flex-wrap'>
                <BlogsItem title='آخرین اخبار درباره صنعت بذر و پیشگامان این صنعت را میتوانید در این پست بخوانید'
                    category={['اخبار روز', 'دسته بندی 2']} color='#44A5DB'
                />
                <BlogsItem title='آخرین اخبار درباره صنعت بذر و پیشگامان این صنعت را میتوانید در این پست بخوانید'
                    category={['اخبار روز', 'دسته بندی 1']} color='#FFD0D0'
                />
            </div>
        </div>
    );
};

export default Blogs;