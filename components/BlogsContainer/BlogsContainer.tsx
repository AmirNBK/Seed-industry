import Image, { StaticImageData } from 'next/image';
import React from 'react';
import arrow from '../../assets/Icons/arrow-3.svg'
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const BlogsContainer = (props: {
    image: StaticImageData
    date: string
    title: string
    hasArrow: boolean
    description: string
    width: number
    height: number
    isVertical: boolean
    author: string
}) => {
    return (
        <div className={`BlogsContainer text-white items-end flex ${props.isVertical ? 'flex-col' : 'flex-row-reverse'} ${vazir.className}`}>
            <Image src={props.image} alt='image' style={{ width: `${props.width}px`, height: `${props.height}px` }} />
            <div className='flex flex-col gap-6 mt-4'>
                <div className='BlogsContainer__date text-right flex flex-row items-center gap-1 justify-end text-xs font-light'>
                    <p style={{ direction: 'rtl' }}> {props.date} </p>
                    .
                    <p style={{ direction: 'rtl' }}>{props.author}  </p>
                </div>
                <div className='BlogsContainer__title flex flex-row-reverse items-center justify-between'>
                    <h3 className='text-3xl font-large text-right'> {props.title} </h3>
                    {props.hasArrow && <Image src={arrow} alt='arrow' />}
                </div>
                <p className='text-right' style={{ direction: 'rtl' }}> {props.description} </p>
            </div>
        </div>
    );
};

export default BlogsContainer;