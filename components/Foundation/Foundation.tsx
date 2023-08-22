import React from 'react';
import founder from '../../assets/Images/foundation.png'
import Image from 'next/image';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
import logo from '../../assets/Icons/fintech-logo.svg'

const Foundation = (props: {
    data: any
}) => {

    console.log(props.data);

    return (
        <div className='Foundation md:w-8/12 w-11/12 mx-auto  relative rounded-md'
            style={{ backgroundImage: 'linear-gradient(40deg, rgba(83, 126, 49, 1) 0%, rgba(50, 66, 37, 1) 30%, rgba(50, 66, 37, 1) 60%, rgba(83, 126, 49, 1) 100%)' }}>
            <div className='flex lg:flex-row-reverse flex-col lg:items-start items-center'>
                <div className='Foundation__info md:text-left text-center md:items-end items-center flex-1 mt-8 text-white items-end flex flex-col px-4 md:pr-12 gap-12 flex-1'>
                    <h2 className={`text-3xl ${myFont.className}`}>
                        {props.data.title}
                    </h2>
                    <p className={`text-lg font-light md:text-right text-center leading-loose ${vazir.className}`} style={{ direction: 'rtl' }}>
                        {props.data.description}
                    </p>
                </div>

                <div className='Foundation__pic flex-1 md:translate-y-0 translate-y-4'>
                    <Image src={props.data.founderPic.sourceUrl} width={443} height={475} alt='founder' unoptimized />
                </div>

                <Image src={logo} alt='logo' className='lg:block hidden absolute xl:w-auto w-48 top-3/4 xl:top-[60%] left-[60%]'
                />
            </div>
        </div>
    );
};

export default Foundation;