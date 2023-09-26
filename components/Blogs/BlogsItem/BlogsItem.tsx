import React, { useState } from 'react';
import localFont from 'next/font/local'
import { Vazirmatn } from 'next/font/google';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import RegularButton from '@/components/CommonComponents/RegularButton/RegularButton';
const myFont = localFont({ src: '../../../assets/Fonts/BYekan+.ttf' })
const myFontBold = localFont({ src: '../../../assets/Fonts/BYekan+ Bold.ttf' })
const vazir = Vazirmatn({ subsets: ['latin'] });

const BlogsItem = (props: {
    title: string
    category: [string, string]
    color: string
    onHoverChange: (isHovered: boolean) => void;
    onHoverContainer: (isHovered: boolean) => void;
    id: number;
}) => {
    const title = props.title
    const category = props.category
    const color = props.color
    const id = props.id
    const [hovered, setHovered] = useState(false)

    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    return (
        <div className={` ${inView && 'animate__animated animate__fadeInRight animate__slower'} BlogsItem text-right w-fit flex flex-col gap-2`}
            ref={ref}
        >
            {inView &&
                <>
                    <div style={{ color: color }}
                        onMouseEnter={() => {
                            props.onHoverChange(true);
                            setHovered(true)
                        }}
                        onMouseLeave={() => {
                            props.onHoverChange(false);
                            setHovered(false)
                        }}
                        className={`${myFont.className} more${id} w-fit ml-auto parent flex flex-row-reverse md:justify-start justify-center gap-4`}> {category.map((item: string, index: number) => {
                            return (
                                <Link href={'/blogs'} key={index} className='text-sm sm:text-lg'
                                >
                                    {item}
                                </Link>
                            )
                        })} </div>
                    <p
                        onMouseEnter={() => {
                            props.onHoverChange(true);
                            setHovered(true)
                        }}
                        onMouseLeave={() => {
                            props.onHoverChange(false);
                            setHovered(false)
                        }}
                        className={`text-white md:text-right text-center text-2xl sm:text-4xl font-extralight mb-4 ${myFont.className}`} style={{ lineHeight: '53px' }}>
                        {title}
                    </p>
                    <p className={`text-white text-sm sm:text-lg w-fit sm:hidden block mx-auto sm:ml-auto font-extralight ${vazir.className}`} style={{ borderBottom: `2px solid ${color}` }}>
                        بیشتر بخوانید
                    </p>

                    <style>
                        {`
                        .more${id} {
                            position: relative;
                            text-decoration: none;
                            padding: 5px 1px;
                            transition: color ease 1s;
                            
                            &::before, &::after {
                              content: '';
                              position: absolute;
                              background-color: ${color};
                              z-index: -1;
                              height: 5%;
                            }
                            
                            &::before {
                              width: 0%;
                              left: 0;
                              bottom: 0;
                              transition: width ease 1.3s;
                            }
                            
                            &::after {
                              width: 100%;
                              left: 0;
                              bottom: 0;
                              transition: all ease 1.3s;
                            }

                            ${hovered &&
                            `
                              &::before {
                                width: 100%;
                              }
                              
                              &::after {
                                left: 100%;
                                width: 0%;
                                transition: all ease 0.6s;
                              }
                            `
                            }                            
                          }
                        `}
                    </style>

                </>
            }
        </div>
    );
};

export default BlogsItem;