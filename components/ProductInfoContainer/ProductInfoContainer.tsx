import React from 'react';

import localFont from 'next/font/local'

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })

const ProductInfoContainer = (props: {
    title: string
    description: string
    bgColor: string
    textColor: string
}) => {
    const title = props.title
    const description = props.description
    const bgColor = props.bgColor
    const textColor = props.textColor

    return (
        <div className='ProductInfoContainer flex flex-col text-right px-5 py-6 gap-2 rounded-md w-80 absolute top-16'
            style={{ background: bgColor, transform: 'translateX(-200px)' }}>
            <h2 className={`text-3xl ${myFont.className}`} style={{ color: `${textColor}` }}> {title} </h2>
            <p className='text-lg' style={{ color: `${textColor}` }}> {description} </p>
        </div>
    );
};

export default ProductInfoContainer;