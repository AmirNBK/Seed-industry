import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import greenSeed from '../../assets/Icons/greenSeed.svg';
import whiteSeed from '../../assets/Icons/whiteSeed.svg';
import plus from '../../assets/Icons/plus.svg'
import ProductInfoContainer from '../ProductInfoContainer/ProductInfoContainer';
import localFont from 'next/font/local'
import { useRouter } from 'next/navigation'
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const numberFont = localFont({ src: '../../assets/Fonts/OtomanopeeOne-Regular.ttf' })
import { Dialog } from 'primereact/dialog';

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
            <div className='flex flex-row-reverse mt-6 items-center'>
                <div className='ProductSlider__rightSide m-0 relative sm:mr-12 md:flex-2 sm:flex-4 flex-3'
                >
                    <Image src={image} className='w-full' alt='seedPic' unoptimized style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%) lightgray 50% / cover no-repeat`,
                        backgroundBlendMode: 'overlay',
                    }} />
                    <p style={{ color: color, }}
                        className={`absolute bottom-[-5px] sm:bottom-[-8px] text-5xl md:text-7xl lg:text-9xl ${index === 1 ? 'left-[-7px] sm:left-[-18px]' : index === 2 ? 'bottom-[-8px]' : index === 3 ? 'bottom-[-3px]' : ''} ${numberFont.className}`}> {index} </p>
                    <ProductInfoContainer title={product} description={description} bgColor={bgColor} textColor={textColor} />
                    <div className='absolute p-1 sm:p-3 rounded-full top-2/4 right-[-15px] sm:right-[-25px]'
                        style={{ transform: 'translateY(-50%)', background: color }}
                        onClick={() => setVisible(true)}
                    >
                        <Image src={plus} alt='plus' className='w-6 sm:w-8' />
                    </div>
                    <p className='absolute top-2/4 text-sm sm:block hidden md:text-lg'
                        style={{ right: '40px', transform: 'translateY(-50%)', color: color }}
                    > برای اطلاعات بیشتر کلیک کنید </p>
                </div>

                <div className='ProductSlider__leftSide sm:block hidden invisible md:visible flex-1 justify-between h-full flex flex-col'>
                    <div className='flex-grow flex flex-col justify-center gap-28'>
                        {colorOrder.map((seed, idx) => (
                            <Image
                                key={idx}
                                src={seed}
                                alt={`seed${idx}`}
                                unoptimized
                                className={idx === 1 ? 'translate-x-20' : ''}
                                style={{ width: idx === index - 1 ? '45px' : '25px' }}
                            />
                        ))}

                        <Dialog header={product} visible={visible} modal={false}
                            style={{ width: '80vw' }} onHide={() => setVisible(false)}>
                            <p className="m-0">
                                {description}
                            </p>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductSlider;
