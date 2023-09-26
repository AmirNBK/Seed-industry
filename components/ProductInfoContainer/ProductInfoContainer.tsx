import React from 'react';

import localFont from 'next/font/local'

const myFont = localFont({ src: '../../assets/Fonts/BYekan+.ttf' })
const myFontBold = localFont({ src: '../../assets/Fonts/BYekan+ Bold.ttf' })

const ProductInfoContainer = (props: {
    title: string
    description: string
    bgColor: string
    textColor: string
    index: number
}) => {
    const title = props.title
    const description = props.description
    const bgColor = props.bgColor
    const index = props.index
    const textColor = props.textColor

    return (
        <div className='ProductInfoContainer sm:block hidden flex flex-col text-right px-5 py-6 gap-2 lg:translate-x-200 translate-x-100 rounded-md w-56 lg:w-80 absolute top-4 xl:top-16'
        >
            <div className='flex flex-row-reverse items-center gap-5 mb-4'>
                <div className='relative translate-y-[3px]'
                >
                    <div className='bg-[#8dda50] w-2 h-2 rounded-full'
                        style={{ transform: 'translate(3px, 3px)' }}
                    >

                    </div>
                    <div className='rounded-full bg-white absolute'
                        style={{ width: '20px', height: '20px', left: '-3px', top: '-3px', opacity: '0.15' }}
                    >

                    </div>
                    <div className='rounded-full bg-white absolute'
                        style={{ width: '35px', height: '35px', left: '-10.5px', top: '-10.5px', opacity: '0.1' }}
                    >

                    </div>
                </div>
                <h2 className={`text-xl lg:text-4xl relative ${myFontBold.className}`} style={{ color: `${textColor}` }}> {title} </h2>
            </div>
            <p className={`${myFont.className} text-xs md:text-sm lg:text-xl relative`} style={{ color: `${textColor}` }}> {description} </p>




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
                    background: ${index === 1 ? 'linear-gradient(90deg, rgba(83,126,49,0.7) 0%, rgba(211,255,169,0.7) 100%)'
                        : 'rgba(255, 255, 255, 0.2)'} ;
                  }
                `}
            </style>
        </div>
    );
};

export default ProductInfoContainer;