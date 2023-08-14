import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import localFont from 'next/font/local';
import { Vazirmatn } from 'next/font/google';

const vazir = Vazirmatn({ subsets: ['latin'] });

const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' });

const ProductsComponent = (props: {
    image: StaticImageData;
    name: string;
    color: string;
    description: string;
    instruction: [string, string];
}) => {
    const [hoverColor, setHoverColor] = useState('');

    return (
        <div className='ProductsComponent flex flex-col items-end w-fit'>
            <Image src={props.image} alt='product image' />
            <div className='flex flex-col items-end gap-4'>
                <h2
                    className={`text-white text-5xl ${myFont.className}`}
                    style={{ color: hoverColor }}
                    onMouseEnter={() => setHoverColor(props.color)}
                    onMouseLeave={() => setHoverColor('')}
                >
                    {props.name}
                </h2>
                <p className={`text-white ${vazir.className} text-2xl w-9/12 text-right`}>
                    {props.description}
                </p>
                <div className={`flex flex-row gap-2 m-0 ${vazir.className}`}>
                    {props.instruction.map((item, index) => (
                        <p key={index} style={{ color: props.color }} className='m-0'>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsComponent;
