import React from 'react';
import founder from '../../assets/Images/foundation.png'
import Image from 'next/image';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
import logo from '../../assets/Icons/fintech-logo.svg'

const Foundation = () => {
    return (
        <div className='Foundation w-8/12 mx-auto my-20 relative rounded-md'
            style={{ backgroundImage: 'linear-gradient(40deg, rgba(83, 126, 49, 1) 0%, rgba(50, 66, 37, 1) 30%, rgba(50, 66, 37, 1) 60%, rgba(83, 126, 49, 1) 100%)' }}>
            <div className='flex flex-row-reverse'>
                <div className='Foundation__info flex-1 mt-8 text-white items-end flex flex-col pr-12 gap-12'>
                    <h2 className={`text-3xl ${myFont.className}`}>
                        موسس صنعت بذر
                    </h2>
                    <p className={`text-lg font-light leading-loose ${vazir.className}`} style={{ direction: 'rtl' }}>
                        حمیدرضا رضایی، یک کارآفرین پرانرژی، پیشرو و متعهد، با سابقه‌ای بلند در حوزه کشاورزی و بذر، مدیرعامل و بنیان‌گذار شرکت بذری گرین‌سید است. او با دانش برجسته‌ای در علوم کشاورزی و تجربه چندین ساله در صنعت بذر است.
                    </p>
                </div>

                <div className='Foundation__pic'>
                    <Image src={founder} alt='founder' unoptimized />
                </div>

                <Image src={logo} alt='logo' className='absolute'
                style={{left : '60%' , top : '60%'}}
                />
            </div>
        </div>
    );
};

export default Foundation;