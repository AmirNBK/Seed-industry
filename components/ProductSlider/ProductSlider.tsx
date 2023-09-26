import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import greenSeed from '../../assets/Icons/greenSeed.svg';
import whiteSeed from '../../assets/Icons/whiteSeed.svg';
import arrow from '../../assets/Icons/arrow-slider.svg'
import ProductInfoContainer from '../ProductInfoContainer/ProductInfoContainer';
import localFont from 'next/font/local'
import { useRouter } from 'next/navigation'
const numberFont = localFont({ src: '../../assets/Fonts/OtomanopeeOne-Regular.ttf' })
const myFont = localFont({ src: '../../assets/Fonts/BYekan+.ttf' })
const myFontBold = localFont({ src: '../../assets/Fonts/BYekan+ Bold.ttf' })
import { Dialog } from 'primereact/dialog';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const ProductSlider = (props: {
    product: string;
    description: string;
    color: string;
    image: StaticImageData;
    index: number;
    textColor: string;
    bgColor: string;
}) => {
    const product = props.product;
    const description = props.description;
    const color = props.color;
    const image = props.image;
    const index = props.index;
    const textColor = props.textColor
    const bgColor = props.bgColor
    const [isInfoVisible, setIsInfoVisible] = useState<boolean>(false)
    const [svgWidth, setSvgWidth] = useState(0);

    const { ref, inView, entry } = useInView({
        triggerOnce: false
    });

    useEffect(() => {
        if (isInfoVisible) {
            setSvgWidth(130); 
        }
        else setSvgWidth(0)
    }, [isInfoVisible]);


    return (
        <div className='ProductSlider sm:p-0 px-6 w-full my-32' id={`product${index}`}>
            <div className='flex flex-row-reverse mt-6 items-center container'>
                <div className='ProductSlider__rightSide m-0 relative sm:mr-12 md:flex-2 sm:flex-4 flex-3'
                >
                    <Image width={150} height={150} src={image} className='w-full' alt='seedPic' unoptimized style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%) lightgray 50% / cover no-repeat`,
                        backgroundBlendMode: 'overlay',
                    }} />
                    <ProductInfoContainer index={index} title={product} description={description} bgColor='#fff' textColor={textColor} />
                    <div className='absolute p-1 sm:p-3 rounded-full top-2/4 right-[-15px] sm:right-[-25px]'
                        style={{ transform: 'translateY(-50%)', background: isInfoVisible ? '#fff' : '#d3ffa9 ' }}
                        onClick={() => setIsInfoVisible(!isInfoVisible)}
                    >
                        <Image src={arrow} alt='arrow' className='w-6 sm:w-7 -translate-x-[2px]'
                            style={{ transform: isInfoVisible ? 'rotate(-90deg) translateX(-2px)' : 'rotate(0deg)', transition: 'all 0.4s' }}
                        />
                    </div>

                    <div className={`${isInfoVisible ? 'opacity-1' : 'opacity-0'} infoContainer text-white duration-500 absolute top-[60%] right-[-15px] w-[35%] rounded-lg pb-20 px-4 pt-4 sm:right-[-25px] text-right bg-white`}>
                        <div className={`${myFontBold.className} text-4xl flex flex-col items-end gap-2`}>
                            <p>
                                {props.product}
                            </p>
                            <svg ref={ref}
                                className="bottom-[-1.7rem] left-0 js-s-svg-fade" width={svgWidth} height="21" viewBox="0 0 213 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    transition: 'width 1s ease-in-out', transitionDelay: '1s'
                                }}
                            >
                                <path d="M0.986657 20.3029C47.0444 5.53886 138.047 -1.45319 212.564 2.5385" stroke="#AAFC75" style={{ strokeDashoffset: "0", strokeDasharray: 'none', animation: "fade 4s linear forwards" }}></path>
                            </svg>
                        </div>
                        <p className={`${myFont.className} mt-4`}>
                            {props.description}
                        </p>

                    </div>
                </div>

                <div className='ProductSlider__leftSide sm:block hidden invisible md:visible flex-1 justify-between h-full flex flex-col'>
                    <div className='flex-grow flex flex-col justify-center gap-28'>
                    </div>
                </div>
            </div>


            <style>
                {
                    `
                    .infoContainer {
background: rgba(255, 255, 255, 0.2);
border-radius: 45px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(100px);
border: 1px solid rgba(255, 255, 255, 0.3);
                    }
                    .container {
                        @media screen and (max-width:2300px) {
                            height : 384px;
                          }
                          @media screen and (max-width:1500px) {
                            height : 584px;
                          }
                          @media screen and (max-width:1000px) {
                            height : 284px;
                          }
                          @media screen and (max-width:684px) {
                            height : 100px;
                          }
                    }
                    `
                }
            </style>
        </div >
    );
};

export default ProductSlider;
