import React from 'react';

import localFont from 'next/font/local'

const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
const BlogsItem = (props: {
    title: string
    category: [string, string]
    color: string
}) => {
    const title = props.title
    const category = props.category
    const color = props.color
    return (
        <div className='BlogsItem text-right w-fit flex flex-col gap-2'>
            <div style={{ color: color }} className={`${myFont.className} flex flex-row justify-end gap-4`}> {category.map((item: string) => {
                return (
                    <p className='text-lg'> {item} </p>
                )
            })} </div>
            <p className='text-white text-4xl' style={{lineHeight : '53px'}}>
                {title}
            </p>
            <p className='text-white text-lg w-fit ml-auto' style={{ borderBottom: `2px solid ${color}` }}>
                بیشتر بخوانید
            </p>
        </div>
    );
};

export default BlogsItem;