import React, { useState } from 'react';
import localFont from 'next/font/local'
import { Vazirmatn } from 'next/font/google';
import dynamic from 'next/dynamic'
import seedPic from '../../../assets/Images/seed.jpeg'
import Image from 'next/image';
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
const vazir = Vazirmatn({ subsets: ['latin'] });

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

const BlogsItem = (props: {
    title: string
    category: [string, string]
    color: string
}) => {
    const title = props.title
    const category = props.category
    const color = props.color
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='BlogsItem text-right w-fit flex flex-col gap-2'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered &&
                <AnimatedCursor
                    innerSize={17}
                    outerSize={180}
                    color='255, 255, 255'
                    outerAlpha={0.5}
                    innerScale={0.7}
                    outerScale={1}
                    trailingSpeed={20}
                    outerStyle={{
                        width: '158px !important',
                        height: '200px !important',
                        backgroundImage: `url(https://images.unsplash.com/photo-1458014854819-1a40aa70211c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
                        borderRadius: '17px',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        transform: 'rotate(9.243deg)',
                        zIndex: '-1',
                    }}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link'
                    ]}
                />
            }
            <div style={{ color: color }} className={`${myFont.className} flex flex-row-reverse md:justify-end justify-center gap-4`}> {category.map((item: string) => {
                return (
                    <p className='text-sm sm:text-lg'> {item} </p>
                )
            })} </div>
            <p className={`text-white md:text-right text-center text-2xl sm:text-4xl font-extralight mb-4 ${vazir.className}`} style={{ lineHeight: '53px' }}>
                {title}
            </p>
            <p className={`text-white text-sm sm:text-lg w-fit mx-auto md:ml-auto font-extralight ${vazir.className}`} style={{ borderBottom: `2px solid ${color}` }}>
                بیشتر بخوانید
            </p>
        </div>
    );
};

export default BlogsItem;