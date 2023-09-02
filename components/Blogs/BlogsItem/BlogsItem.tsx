import React, { useState } from 'react';
import localFont from 'next/font/local'
import { Vazirmatn } from 'next/font/google';
import dynamic from 'next/dynamic'
import seedPic from '../../../assets/Images/seed.jpeg'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
const vazir = Vazirmatn({ subsets: ['latin'] });

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

const BlogsItem = (props: {
    title: string
    category: [string, string]
    color: string
    onHoverChange: (isHovered: boolean) => void;
}) => {
    const title = props.title
    const category = props.category
    const color = props.color
    const [isHovered, setIsHovered] = useState(false);

    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    return (
        <div className={` ${inView && 'animate__animated animate__fadeInRight animate__slower'} BlogsItem text-right w-fit flex flex-col gap-2`}
            ref={ref}
        >
            {inView &&
                <>
                    <div style={{ color: color }} className={`${myFont.className} flex flex-row-reverse md:justify-start justify-center gap-4`}> {category.map((item: string, index: number) => {
                        return (
                            <p key={index} className='text-sm sm:text-lg'>
                                {item}
                            </p>
                        )
                    })} </div>
                    <p
                        onMouseEnter={() => {
                            setIsHovered(true);
                            props.onHoverChange(true);
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            props.onHoverChange(false);
                        }}
                        className={`text-white md:text-right text-center text-2xl sm:text-4xl font-extralight mb-4 ${vazir.className}`} style={{ lineHeight: '53px' }}>
                        {title}
                    </p>
                    <p className={`text-white text-sm sm:text-lg w-fit sm:block hidden sm:ml-auto font-extralight ${vazir.className}`} style={{ borderBottom: `2px solid ${color}` }}>
                        بیشتر بخوانید
                    </p>
                    <p className={`text-white text-sm sm:text-lg w-fit sm:hidden block mx-auto sm:ml-auto font-extralight ${vazir.className}`} style={{ borderBottom: `2px solid ${color}` }}>
                        بیشتر بخوانید
                    </p>
                </>
            }
        </div>
    );
};

export default BlogsItem;