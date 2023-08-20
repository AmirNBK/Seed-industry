import Image from 'next/image';
import React from 'react';
import pic from '../../../assets/Images/productPic.jpeg'
import flag from '../../../assets/Icons/flag.svg'
import grass from '../../../assets/Icons/grass.svg'
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const ProductComponents = () => {
    const icons = [flag, "15 KG", grass]
    const seedFeatures = [{
        title: 'کدو حلوایی', description: '15%'
    },
    {
        title: 'آنیسو', description: '60 %'
    },
    {
        title: 'بذر', description: '25 %'
    },
    ]

    return (
        <div className='ProductComponents flex sm:flex-row-reverse flex-col items-center sm:gap-0 gap-12 sm:items-start'>
            <div className='ProductComponents__image flex-1 sm:m-0 mt-6'
            >
                <Image src={pic} alt='pic' className='' style={{ borderRadius: '70px' }} />
            </div>
            <div className='ProductComponents__info flex-1 sm:w-fit w-full'>
                <div className='ProductComponents__info__icons flex flex-row-reverse justify-evenly gap-2'>
                    {icons.map((item) => {
                        return (
                            <div className='rounded-full p-1 flex justify-center items-center text-xs text-white' style={{ backgroundColor: '#575C54', width: '45px' }}>
                                {typeof item != 'string' ? <Image src={item} alt='item' /> : item}
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col mt-6 gap-4'>
                    {seedFeatures.map((item) => {
                        return (
                            <div className={`flex flex-row-reverse justify-around ${vazir.className} font-light`} key={item.title}>
                                <p style={{}} className='text-right text-white'>{item.title}</p>
                                <p style={{ color: '#88DB44' }} className='text-right font-extralight'
                                >{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductComponents;