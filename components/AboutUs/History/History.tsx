import React, { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import VerticalCarousel from "../../VerticalCarouselTest/VerticalCarouselTest";
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' });

const History = (props: {
    data: any
}) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    return (
        <div className={`History my-30 md:my-60`} ref={ref}>
            <BubbleComponent />
            <h1 className={`text-6xl sm:text-8xl ${myFont.className} ${inView && 'animate__animated animate__fadeInUp animate__slower'} text-center text-white mt-20`}
            >
                تاریخچه
            </h1>
            <div className={`my-16 md:my-32`}>
                <VerticalCarousel data={props.data} />
            </div>
        </div >
    );
};

export default History;
