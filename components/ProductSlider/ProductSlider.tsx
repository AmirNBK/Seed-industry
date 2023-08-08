import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Header from '../Header/Header';
import greenSeed from '../../assets/Icons/greenSeed.svg';
import whiteSeed from '../../assets/Icons/whiteSeed.svg';
import plus from '../../assets/Icons/plus.svg'
import ProductInfoContainer from '../ProductInfoContainer/ProductInfoContainer';
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const numberFont = localFont({ src: '../../assets/Fonts/OtomanopeeOne-Regular.ttf' })

const ProductSlider = (props: {
    product: string;
    description: string;
    color: string;
    image: StaticImageData;
    index: number;
    textColor: string;
    bgColor: string
}) => {
    const product = props.product;
    const description = props.description;
    const color = props.color;
    const image = props.image;
    const index = props.index;
    const textColor = props.textColor
    const bgColor = props.bgColor

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
        <div className='ProductSlider w-full my-32'>
            <Header />
            <div className='flex flex-row-reverse mt-6 items-center'>
                <div className='ProductSlider__rightSide relative mr-12'
                    style={{ flex: '1.7' }}
                >
                    <Image src={image} className='w-full' alt='seedPic' unoptimized style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%) lightgray 50% / cover no-repeat`,
                        backgroundBlendMode: 'overlay',
                    }} />
                    <p style={{ color: color, bottom: '-8px', left: `${index === 1 ? "-18px" : index === 2 ? '-8px' : '-3px' }` }} className={`absolute text-9xl ${numberFont.className}`}> {index} </p>
                    <ProductInfoContainer title={product} description={description} bgColor={bgColor} textColor={textColor} />
                    <div className='absolute p-3 rounded-full top-2/4'
                        style={{ right: '-25px', transform: 'translateY(-50%)', background: color }}
                    >
                        <Image src={plus} alt='plus' />
                    </div>
                    <p className='absolute top-2/4 text-lg'
                        style={{ right: '40px', transform: 'translateY(-50%)', color: color }}
                    > برای اطلاعات بیشتر کلیک کنید </p>
                </div>

                <div className='ProductSlider__leftSide flex-1 justify-between h-full flex flex-col'>
                    <div className='flex-grow flex flex-col justify-center gap-28'>
                        {colorOrder.map((seed, idx) => (
                            <Image key={idx} src={seed} alt={`seed${idx}`} unoptimized className={idx === 1 ? 'translate-x-20' : ''}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductSlider;
