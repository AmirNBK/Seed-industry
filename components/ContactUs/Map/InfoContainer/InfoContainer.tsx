import React from 'react';
import Image from 'next/image';
import instagram from '../../../../assets/Icons/instagram.svg'
import linkedin from '../../../../assets/Icons/linkedin.svg'
import x from '../../../../assets/Icons/x.svg'
import location from '../../../../assets/Icons/location.svg';
import phone from '../../../../assets/Icons/phone.svg';
import email from '../../../../assets/Icons/email.svg';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const InfoContainer = (props: {
    address: string;
    telephone: string;
    emailAddress: string;
}) => {
    const infoItems = [
        { icon: location, text: props.address },
        { icon: phone, text: props.telephone },
        { icon: email, text: props.emailAddress },
    ];

    const socialMedia = [
        instagram, linkedin, x
    ];

    return (
        <div className={`InfoContainer text-xs h-full sm:text-base rounded-md text-white w-3/5 lg:w-full flex flex-col px-6 py-6 ${vazir.className}`}
            style={{ backgroundColor: '#000' }}>
            {infoItems.map((item, index) => (
                <div className='InfoContainer__items flex flex-col items-center' key={index}>
                    <Image src={item.icon} alt='icon' />
                    <p className='text-center'>{item.text}</p>
                </div>
            ))}
            <div className='flex flex-row justify-evenly'>
                {socialMedia.map((item: any, index: number) => {
                    return (
                        <Image className='w-8' src={item} alt={item} key={index} />
                    )
                })}
            </div>

            <p className='text-center'>مشاهده برروی نقشه</p>
        </div>
    );
};

export default InfoContainer;
