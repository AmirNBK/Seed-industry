import React from 'react';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import VerticalCarousel from "../../VerticalCarouselTest/VerticalCarouselTest";
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' });

const History = (props: {
    data: any
}) => {
    return (
        <div className='History my-60'>
            <BubbleComponent />
            <h1 className={`text-6xl sm:text-8xl ${myFont.className} text-center text-white mt-20`}
               
            >
                تاریخچه
            </h1>
            <div className='my-32'>
                <VerticalCarousel data={props.data} />
            </div>
        </div>
    );
};

export default History;
