import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import useWindowSize from '@/Hooks/innerSize';
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })


const ProductPic = (props: {
    productName: string
    pic: StaticImageData
    inView: any
}) => {
    const [scrollY, setScrollY] = useState(0)
    const [showTitle, setShowtitle] = useState<boolean>(false)
    const size = useWindowSize()
    



    useScrollPosition(({ prevPos, currPos }) => {
        setScrollY(currPos.y)
    })

    useEffect(() => {
        if (scrollY < -430) setShowtitle(true)
    }, [scrollY])

    return (
        <div className='productContainer__pic relative border-l border-solid border-white xl:block hidden'
            style={{ flex: '1.5' }}
        >
            {((scrollY > -430 && showTitle) || props.inView) &&
                <p className={` ${myFont.className} text-3xl md:text-5xl text-white fixed text-center animate__animated animate__lightSpeedOutRight`}
                    style={{ top: '20%', right: '5%' }}
                >
                    {props.productName}
                </p>
            }
            {(scrollY < -430 && !props.inView) &&
                <p className={` ${myFont.className} text-3xl md:text-5xl text-white fixed text-center animate__animated animate__lightSpeedInRight`}
                    style={{ top: '20%', right: '5%' }}
                >
                    {props.productName}
                </p>
            }
            <Image src={props.pic} alt='pic'
                className={`${props.inView ? ' -translate-x-1/2	 absolute bottom-0' : 'xl:fixed xl:translate-x-full'} duration-1000 ease-in-out	 mx-auto left-1/2  xl:p-0 pb-8 xl:w-80 w-5/12 animate__animated animate__fadeIn animate__delay-3s`}
                unoptimized />

        </div>
    );
};

export default ProductPic;