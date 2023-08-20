import React from 'react';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import VerticalCarousel from "../../VerticalCarousel/VerticalCarousel";
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' });
import data from "./data.json";

const History = () => {
    return (
        <div className='History my-20'>
            <h1 className={`text-6xl sm:text-8xl ${myFont.className} text-center text-white mt-20`}>
                تاریخچه
            </h1>
            <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
        </div>
    );
};

export default History;
