import Image, { StaticImageData } from 'next/image';
import { Vazirmatn } from 'next/font/google';
import React, { useState } from 'react';
const vazir = Vazirmatn({ subsets: ['latin'] });
import styles from './ValuesContainer.module.scss'
import ResearchIcon from '@/assets/Icons/magnifier';
import cross from '../../../assets/Icons/cross.svg'
import useWindowSize from '../../../Hooks/innerSize'
import light from '../../../assets/Images/card-light.png'
import whiteLight from '../../../assets/Images/whiteLight.png'


const ValuesContainer = (props: {
    title: string;
    icon?: any;
    description: string;
    bgColor: string
    topPosition?: string
    leftPosition?: string
    onToggleClick: any
    onToggleClose: any
    index: number
    activeIndex: number | null
}) => {
    const title = props.title
    const icon = props.icon
    const description = props.description
    const bgColor = props.bgColor
    const topPosition = props.topPosition
    const leftPosition = props.leftPosition
    const index = props.index
    const activeIndex = props.activeIndex

    const [crossHover, setCrossHover] = useState<boolean>(false)


    const size = useWindowSize();


    const handleClick = () => {
        props.onToggleClick();
    };

    const handleClose = () => {
        props.onToggleClose();
    };

    return (
        <div
            className={`w-full sm:w-8/12 absolute justify-center pt-6 pb-16 overflow-hidden px-10 mx-auto sm:mt-12 sm:rounded-md ${vazir.className} ${styles.ValuesContainer} ${index === activeIndex ? styles.clicked : ''}`}
            style={{
                boxShadow: '0px -23px 60px rgba(0, 0, 0, 0.25)',
                height: '368px',
                top: topPosition,
                left: `${(size?.width ?? 0) > 640 && leftPosition}`,
            }}
            onClick={handleClick}
        >
            <div className='ValuesContainer__title flex flex-row-reverse items-center gap-2 justify-center sm:justify-between'>
                <div className='flex sm:flex-row flex-col items-center gap-2 justify-end'>
                    <p style={{ color: `${index === activeIndex ? 'black' : '#AAFC75'}` }} className='text-2xl text-center'> {title} </p>
                    {<ResearchIcon color={index === activeIndex ? 'black' : '#aafc75'} />}
                </div>
                {index === activeIndex ?
                    <>
                        <Image src={whiteLight} alt='light' className='absolute w-full z-[-1]' />
                        <Image src={whiteLight} alt='light' className='absolute w-1/2 top-0 left-1/2 rotate-90 z-[-1]' />
                    </>

                    :
                    <>
                        <Image src={light} alt='light' className='absolute' style={{ right: '-10%', top: '-50%', width: '540px' }} />
                        <Image src={light} alt='light' className='absolute' style={{ right: '30%', top: '-40%' }} />
                    </>
                }
                {index === activeIndex && (
                    <div
                        className='bg-white rounded-full p-2 sm:block hidden'
                        onMouseEnter={() => setCrossHover(true)} onMouseLeave={() => setCrossHover(false)}
                        onClick={() => {
                            handleClose
                        }}
                    >
                        <Image src={cross} alt='cross'
                            className={`${crossHover ? 'rotate-90' : 'rotate-0'} duration-500`}
                        />
                    </div>
                )}
            </div>
            <div className='text-white text-right text-sm sm:text-lg mt-6 leading-7 w-11/12 mx-auto' style={{ direction: 'rtl', color: `${index === activeIndex ? 'black' : '#fff'}` }}>
                {description}
            </div>
        </div>
    );
};

export default ValuesContainer;