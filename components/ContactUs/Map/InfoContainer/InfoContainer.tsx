import React from 'react';
import Image from 'next/image';
import arrow from '../../../../assets/Icons/arrow-down2.svg';
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

    return (
        <div className={`InfoContainer text-xs sm:text-base absolute top-1/2 left-1/2 rounded-md text-white w-3/5 lg:w-3/12 flex flex-col gap-6 px-6 py-6 ${vazir.className}`}
            style={{ backgroundColor: '#000', transform: 'translate(-50%,-50%)' }}>
            {infoItems.map((item, index) => (
                <div className='InfoContainer__items flex flex-col items-center gap-2' key={index}>
                    <Image src={item.icon} alt='icon' />
                    <p className='text-center'>{item.text}</p>
                </div>
            ))}

            <p className='text-center'>مشاهده برروی نقشه</p>

            <Image src={arrow} alt='arrow' className='absolute left-1/2'
            style={{bottom : '-35px' , transform : 'translateX(-50%)'}}
            />
        </div>
    );
};

export default InfoContainer;
