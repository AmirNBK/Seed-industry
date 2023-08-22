import React from 'react';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import VerticalCarousel from "../../VerticalCarouselTest/VerticalCarouselTest";
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' });
import data from "./data.json";

const History = (props: {
    data: any
}) => {

    console.log(props.data);
    
    return (
        <div className='History my-60'>
            <h1 className={`text-6xl sm:text-8xl ${myFont.className} text-center text-white mt-20`}
                data-aos="fade-down" data-aos-duration="3000" data-aos-once={true}
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
