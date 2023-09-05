import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })


const ProductPic = (props: {
    productName: string
    pic: StaticImageData
}) => {
    const [scrollY, setScrollY] = useState(0)
    const [showTitle, setShowtitle] = useState<boolean>(false)


    useScrollPosition(({ prevPos, currPos }) => {
        setScrollY(currPos.y)
    })

    useEffect(() => {
        if (scrollY < -430) setShowtitle(true)
    }, [scrollY])

    console.log(scrollY);


    return (
        <div className='productContainer__pic border-l border-solid border-white xl:block hidden'
            style={{ flex: '1.5' }}
        >
            {(scrollY > -430 && showTitle) &&
                <p className={` ${myFont.className} text-3xl md:text-5xl text-white fixed text-center animate__animated animate__lightSpeedOutRight`}
                    style={{ top: '20%', right: '5%' }}
                >
                    {props.productName}
                </p>
            }
            {scrollY < -430 &&
                <p className={` ${myFont.className} text-3xl md:text-5xl text-white fixed text-center animate__animated animate__lightSpeedInRight`}
                    style={{ top: '20%', right: '5%' }}
                >
                    {props.productName}
                </p>
            }
            <Image src={props.pic} alt='pic'
                className='mx-auto xl:fixed left-1/2 xl:translate-x-full xl:p-0 pb-8 xl:w-80 w-5/12 animate__animated animate__fadeIn animate__delay-3s'
                unoptimized />

        </div>
    );
};

export default ProductPic;