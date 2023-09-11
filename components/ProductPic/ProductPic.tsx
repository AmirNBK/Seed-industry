import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
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

    const parentRef = useRef(null);
    const imageRef = useRef(null);
    const [reachedMax, setReachedMax] = useState(false);

    // console.log(parentRef.current?.offsetHeight);
    console.log(imageRef);

    

    useEffect(() => {
        const parent = parentRef.current;
        const image = imageRef.current;

        const checkBoundary = () => {
            if (parent && image) {
                const parentRect = parent.getBoundingClientRect();
                const imageRect = image.getBoundingClientRect();

                // Check if the image's right edge is greater than or equal to the parent's right edge
                if (imageRect.right >= parentRect.right) {
                    setReachedMax(true);
                } else {
                    setReachedMax(false);
                }
            }
        };

        window.addEventListener('scroll', checkBoundary);
        // You may want to add more event listeners (e.g., window resize) as needed

        // Initial check
        checkBoundary();

        return () => {
            window.removeEventListener('scroll', checkBoundary);
            // Remove other event listeners if added
        };
    }, []);


    useScrollPosition(({ prevPos, currPos }) => {
        setScrollY(currPos.y)
    })

    useEffect(() => {
        if (scrollY < -430) setShowtitle(true)
    }, [scrollY])

    return (
        <div className='productContainer__pic relative border-l border-solid border-white xl:block hidden'
            ref={parentRef}
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
                ref={imageRef}
                className={`xl:fixed xl:translate-x-full mx-auto left-1/2 xl:p-0 pb-8 xl:w-80 w-5/12 animate__animated animate__fadeIn animate__delay-3s`}
                unoptimized />

        </div>
    );
};

export default ProductPic;