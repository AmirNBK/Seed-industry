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
        <div className='ProductInfoContainer sm:block hidden flex flex-col text-right px-5 py-6 gap-2 lg:translate-x-200 translate-x-100 rounded-md w-56 lg:w-80 absolute top-4 xl:top-16'
>
            <h2 className={`text-xl lg:text-3xl relative ${myFont.className}`} style={{ color: `${textColor}` }}> {title} </h2>
            <p className='text-xs md:text-sm lg:text-lg relative' style={{ color: `${textColor}` }}> {description} </p>




            <style>
                {`
                .ProductInfoContainer::before {
                    content: "";
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius : 6px;
                    background-color: rgba(255, 255, 255, 0.2);
                  }
                `}
            </style>
        </div>
    );
};

export default ProductInfoContainer;