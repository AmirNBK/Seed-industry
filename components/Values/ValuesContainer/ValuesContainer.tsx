import Image, { StaticImageData } from 'next/image';
import { Vazirmatn } from 'next/font/google';
import React, { useState } from 'react';
const vazir = Vazirmatn({ subsets: ['latin'] });
import styles from './ValuesContainer.module.scss'
import ResearchIcon from '@/assets/Icons/magnifier';
import cross from '../../../assets/Icons/cross.svg'

const ValuesContainer = (props: {
    title: string;
    icon?: any;
    description: string;
    bgColor: string
    topPosition?: string
    leftPosition?: string
    onToggleClick: any
    onToggleClose: any
    index: number
    activeIndex: number | null
}) => {
    const title = props.title
    const icon = props.icon
    const description = props.description
    const bgColor = props.bgColor
    const topPosition = props.topPosition
    const leftPosition = props.leftPosition
    const index = props.index
    const activeIndex = props.activeIndex

    const handleClick = () => {
        props.onToggleClick();
    };

    const handleClose = () => {
        props.onToggleClose();
    };

    return (
        <div className={`w-8/12 absolute justify-center pt-6 pb-16 px-10 mx-auto mt-12 rounded-md ${vazir.className} ${styles.ValuesContainer} ${index === activeIndex ? styles.clicked : ''}`}
            style={{
                boxShadow: '0px -23px 60px rgba(0, 0, 0, 0.25)',
                height: '368px',
                top: topPosition,
                left: leftPosition,
            }}
            onClick={handleClick}
        >
            <div className='ValuesContainer__title flex flex-row-reverse items-center gap-2 justify-between'>
                <div className='flex items-center gap-2 justify-end'>
                    <p style={{ color: `${index === activeIndex ? 'black' : '#AAFC75'}` }} className='text-2xl'> {title} </p>
                    {<ResearchIcon color={index === activeIndex ? 'black' : '#aafc75'} />}
                </div>
                {index === activeIndex && (
                    <div
                        className='bg-white rounded-full p-2'
                        onClick={() => {
                            handleClose
                        }}
                    >
                        <Image src={cross} alt='cross' />
                    </div>
                )}
            </div>
            <div className='text-white text-right text-lg mt-6 leading-7 w-11/12 mx-auto' style={{ direction: 'rtl', color: `${index === activeIndex ? 'black' : '#fff'}` }}>
                {description}
            </div>
        </div>
    );
};

export default ValuesContainer;