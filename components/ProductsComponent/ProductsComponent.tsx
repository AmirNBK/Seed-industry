import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import localFont from 'next/font/local';
import { Vazirmatn } from 'next/font/google';
import Link from 'next/link';
const vazir = Vazirmatn({ subsets: ['latin'] });
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' });
import styles from './ProductsComponent.module.css'

type InstructionItem = {
    instruction: string;
};

const ProductsComponent = (props: {
    image: StaticImageData;
    name: string;
    color: string;
    description: string;
    instruction: InstructionItem[];
    link: string
}) => {
    const [hoverColor, setHoverColor] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const resetHover = () => {
        setTimeout(() => {
            setIsHovered(false);
        }, 1000);
    };

    return (
        <Link href={`/products/${props.link}`} replace={false} className='ProductsComponent animate__animated animate__zoomIn md:m-0 mx-auto items-center lg:items-end flex flex-col w-fit'
            
        >
            <Image src={props.image} alt='product image' className={`${styles.productImage}`} width={245} height={368} />
            <div className='flex flex-col lg:items-end items-center gap-4'>
                <p
                    className={`text-white text-5xl mt-4
                    ${myFont.className} ${styles.product}`}
                    style={{ color: hoverColor }}
                    onMouseEnter={() => {
                        setIsHovered(true);
                        setHoverColor(props.color);
                        resetHover();
                    }}
                    onMouseLeave={() => {
                        setHoverColor('');
                    }}
                >
                    {props.name}
                </p>
                <p className={`text-white ${vazir.className} text-2xl w-9/12 text-right`}>
                    {props.description}
                </p>
                <div className={`flex flex-row gap-2 m-0 ${vazir.className}`}>
                    {props.instruction?.map((item, index: number) => (
                        <p key={index} style={{ color: props.color }} className='m-0'>
                            {item.instruction}
                        </p>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProductsComponent;
