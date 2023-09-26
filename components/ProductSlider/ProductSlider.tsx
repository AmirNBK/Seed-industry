import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import greenSeed from '../../assets/Icons/greenSeed.svg';
import whiteSeed from '../../assets/Icons/whiteSeed.svg';
import arrow from '../../assets/Icons/arrow-slider.svg'
import ProductInfoContainer from '../ProductInfoContainer/ProductInfoContainer';
import localFont from 'next/font/local'
import { useRouter } from 'next/navigation'
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const numberFont = localFont({ src: '../../assets/Fonts/OtomanopeeOne-Regular.ttf' })
import { Dialog } from 'primereact/dialog';
import Link from 'next/link';

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
    const router = useRouter()
    const [visible, setVisible] = useState<boolean>(false);


    const getColorOrder = (index: number) => {
        const orders = [
            [greenSeed, whiteSeed, whiteSeed],
            [whiteSeed, greenSeed, whiteSeed],
            [whiteSeed, whiteSeed, greenSeed],
        ];
        return orders[index % orders.length];
    };

    const colorOrder = getColorOrder(index - 1);

    return (
        <div className='ProductSlider sm:p-0 px-6 w-full my-32' id={`product${index}`}>
            <div className='flex flex-row-reverse mt-6 items-center container'>
                <div className='ProductSlider__rightSide m-0 relative sm:mr-12 md:flex-2 sm:flex-4 flex-3'
                >
                    <Image width={150} height={150} src={image} className='w-full' alt='seedPic' unoptimized style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%) lightgray 50% / cover no-repeat`,
                        backgroundBlendMode: 'overlay',
                    }} />
                    <p style={{ color: color, }}
                        className={`absolute bottom-[-5px] sm:bottom-[-8px] text-5xl md:text-7xl lg:text-9xl ${index === 1 ? 'left-[-7px] sm:left-[-18px]' : index === 2 ? 'bottom-[-8px]' : index === 3 ? 'bottom-[-3px]' : ''} ${numberFont.className}`}> {index} </p>
                    <ProductInfoContainer title={product} description={description} bgColor='#fff' textColor={textColor} />
                    <div className='absolute p-1 sm:p-3 rounded-full top-2/4 right-[-15px] sm:right-[-25px]'
                        style={{ transform: 'translateY(-50%)', background: '#d3ffa9' }}
                        onClick={() => setVisible(true)}
                    >
                        <Image src={arrow} alt='arrow' className='w-6 sm:w-7 -translate-x-[2px]' />
                    </div>
                </div>

                <div className='ProductSlider__leftSide sm:block hidden invisible md:visible flex-1 justify-between h-full flex flex-col'>
                    <div className='flex-grow flex flex-col justify-center gap-28'>
                        <Dialog header={product} visible={visible} modal={false}
                            style={{ width: '80vw' }} onHide={() => setVisible(false)}>
                            <p className="m-0">
                                {description}
                            </p>
                            <div className='text-center mt-6 border w-fit mx-auto border-x-transparent border-t-transparent border-solid'
                            style={{borderBottomColor : 'rgb(68, 165, 219)'}}
                            >
                                <Link href={'/products/grass-2'}>
                                    مشاهده بیشتر
                                </Link>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>


            <style>
                {
                    `
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
