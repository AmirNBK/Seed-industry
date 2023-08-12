import Image from 'next/image';
import React from 'react';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
import logo from '../../assets/Icons/logo.png'
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import arrow from '../../assets/Icons/arrow.svg'
import styles from './Header.module.css'

const Header = () => {
    const items = ['صفحه اصلی', 'درباره ما', 'محصولات', 'ارتباط با ما', 'تصاویر']
    return (
        <div className={`Header flex flex-row-reverse w-full justify-between items-center pb-6 ${vazir.className}`}
            style={{ borderBottom: '1px solid #fff' }}
        >
            <div className='Header__logo'>
                <Image src={logo} alt='logo' />
            </div>
            <div className='Header__items text-white flex flex-row-reverse gap-16 text-lg'
            >
                {items.map((item) => {
                    return (
                        <a className='cursor-pointer text-xl font-medium'>
                            {item}
                        </a>
                    )
                })}
            </div>

            <div className='Header__extraPart flex flex-row-reverse gap-6 items-center'>
                <span className="p-input-icon-right">
                    <i className="pi pi-search" />
                    <InputText placeholder="جستجو" style={{ borderRadius: '9999px', textAlign: 'right', direction: 'rtl' }} />
                </span>

                <div className='Header__extraPart__languages text-white flex items-center gap-2 cursor-pointer'>
                    <p> EN </p>
                    <Image src={arrow} alt='arrow' className={`${styles.arrow}`}/>
                </div>
            </div>
        </div>
    );
};

export default Header;