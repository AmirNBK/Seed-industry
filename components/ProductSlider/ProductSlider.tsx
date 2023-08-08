import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Header from '../Header/Header';
import greenSeed from '../../assets/Icons/greenSeed.svg';
import whiteSeed from '../../assets/Icons/whiteSeed.svg';

const ProductSlider = (props: {
    product: string;
    description: string;
    color: string;
    image: StaticImageData;
    index: number;
}) => {
    const product = props.product;
    const description = props.description;
    const color = props.color;
    const image = props.image;
    const index = props.index;

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
                <div className='ProductSlider__rightSide flex-1 relative'>
                    <Image src={image} alt='seedPic' unoptimized />
                    <p style={{ color: color, bottom: '-17px', left: '-30px' }} className='absolute text-9xl'> {index} </p>
                </div>

                <div className='ProductSlider__leftSide flex-1 justify-between h-full flex flex-col'>
                    <div className='flex-grow flex flex-col justify-center gap-32'>
                        {colorOrder.map((seed, idx) => (
                            <Image key={idx} src={seed} alt={`seed${idx}`} unoptimized className={idx === 1 ? 'translate-x-20' : ''}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;
