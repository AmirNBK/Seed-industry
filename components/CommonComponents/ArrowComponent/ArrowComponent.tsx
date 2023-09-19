import Image from 'next/image';
import React, { useState } from 'react';
import arrow from '../../../assets/Icons/arrow-down.svg';
import styles from './ArrowComponent.module.css';
import 'animate.css';
import Link from 'next/link';

const ArrowComponent = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const scrollToAboutUs = () => {
        window.scrollTo({
            top: 350,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`ArrowComponent rounded-full w-fit w-64 h-64 absolute bottom-0 lg:block hidden
            animate__animated  animate__fadeIn animate__slower`}
            style={{ transform: 'translateY(-180px)', marginLeft: '100px' }}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            <span onClick={scrollToAboutUs}>
                <div
                    className={`absolute w-40 h-40 xl:w-64 xl:h-64 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    `}
                >
                    <div
                        className={`rounded-full absolute bg-transparent w-full h-full ${isHovered ? styles.ArrowContainer : styles.ArrowContainer__notHover}`}
                        style={{
                            border: '1px solid #fff',
                        }}
                    ></div>
                </div>
                <Image
                    unoptimized
                    alt='arrow'
                    src={arrow}
                    className={`relative duration-300 left-1/2 top-1/2 -translate-x-1/2 opacity-0 ${isHovered ? '-translate-y-1/2 opacity-100' : '-translate-y-full'}`}
                />
                <Image
                    unoptimized
                    alt='arrow'
                    src={arrow}
                    className={`relative duration-300 left-1/2 top-[46%] -translate-x-1/2 ${isHovered ? 'translate-y-1/2 opacity-0' : '-translate-y-full'}`}
                />
            </span>
        </div>
    );
};

export default ArrowComponent;
