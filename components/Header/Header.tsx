import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
import logo from '../../assets/Icons/logo.png'
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import arrow from '../../assets/Icons/arrow.svg'
import styles from './Header.module.css'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'
import 'animate.css';
import productPic from '../../assets/Images/product.png'

const Header = (props: {
    data: any
    searchData?: any
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const [isArrowActive, setIsArrowActive] = useState(false);



    useEffect(() => {
        if (props.searchData) {
            setSearchResults(props.searchData.grassSeed[0].product);
        }
    }, [props.searchData]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filteredResults = props.searchData.grassSeed[0].product.filter((item: any) =>
            item.productName.includes(term)
        );

        setSearchResults(filteredResults);
    };

    return (
        <>
            <div className='md:hidden block text-center w-full'>
                <div className='flex flex-row-reverse items-center justify-between w-full'>
                    <Button icon="pi pi-align-justify" style={{
                        background: '#A4D0A4', borderRadius: '9000px',
                        width: '70px', height: '70px'
                    }}
                        onClick={() => setVisibleRight(true)} />
                    <Image src={logo} alt='logo' className='mr-auto' />
                </div>
                <Sidebar visible={visibleRight} position="right"
                    onHide={() => setVisibleRight(false)}
                    style={{ background: '#EDEDED', fontFamily: '__Vazirmatn_253970' }}
                >
                    <div className='flex flex-col justify-between h-full'>
                        <div className='Header__items justify-between flex-col text-center justify-center gap-8 text-black flex flex-row-reverse'>
                            <div>
                                <span className="p-input-icon-right">
                                    <i className="pi pi-search" />
                                    <InputText
                                        placeholder="جستجو"
                                        style={{ borderRadius: '9999px', textAlign: 'right', direction: 'rtl' }}
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                </span>
                                {searchTerm &&
                                    <div className='bg-white text-right rounded-lg px-4 py-3 absolute flex flex-col gap-6'
                                        style={{
                                            boxShadow: "0px 1px 10px rgb(0 0 0 / 35%)", transform: "translateY(10px)",
                                            maxHeight: "300px",
                                            width: '234px'
                                        }}
                                    >
                                        {searchResults?.map((result: any, index: number) => (
                                            <Link href={`/products/${result.id}`}
                                                key={index} className='flex flex-row-reverse items-center justify-between border-b border-slate-300
                           last:border-none
                           '>
                                                <p>{result.productName}</p>
                                                <Image src={productPic} alt='image' width={50} height={50} />
                                            </Link>
                                        ))}
                                    </div>
                                }

                            </div>
                            {props.data?.map((item: { label: { url: string; title: string } }, index: number) => (
                                <Link key={index} href={item.label.url} className='cursor-pointer  text-2xl'>
                                    {item.label.title}
                                </Link>
                            ))}
                        </div>
                        <div className='Header__logo'>
                            <Image src={logo} alt='logo' className='mx-auto' />
                        </div>
                    </div>
                </Sidebar>
            </div>
            <div className={`md:flex hidden Header animate__animated animate__slower animate__backInDown flex-col gap-6 xl:flex-row w-full justify-between items-center pb-6 ${vazir.className}`}
            >
                <div className='Header__logo'>
                    <Image src={logo} alt='logo' />
                </div>

                <div className='Header__extraPart flex flex-row gap-6 items-center'>
                    <div>
                        <span className="p-input-icon-right">
                            <i className="pi pi-search" />
                            <InputText
                                placeholder="جستجو"
                                style={{ borderRadius: '9999px', textAlign: 'right', direction: 'rtl' , background : 'transparent' }}
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </span>
                        {searchTerm &&
                            <div className='bg-white text-right rounded-lg px-4 py-3 absolute flex flex-col gap-6'
                                style={{
                                    boxShadow: "0px 1px 10px rgb(0 0 0 / 35%)", transform: "translateY(10px)",
                                    maxHeight: "300px",
                                    width: '234px'
                                }}
                            >
                                {searchResults?.map((result: any, index: number) => (
                                    <Link href={`/products/${result.id}`}
                                        key={index} className='flex flex-row-reverse items-center justify-between border-b border-slate-300
                           last:border-none
                           '>
                                        <p>{result.productName}</p>
                                        <Image src={productPic} alt='image' width={50} height={50} />
                                    </Link>
                                ))}
                            </div>
                        }

                    </div>
                    <Button icon="pi pi-align-justify" style={{
                        background: '#A4D0A4', borderRadius: '9000px',
                        width: '70px', height: '70px'
                    }} />

                    <div className='Header__extraPart__languages relative text-white flex items-center gap-2 cursor-pointer'
                        onClick={() => setIsArrowActive(prevState => !prevState)}>
                        <p className='translate-y-px text-opacity-50 text-white'> EN </p>
                        <Image src={arrow} alt='arrow' className={`${isArrowActive ? styles['arrow-active'] : styles.arrow}`} />
                        <div className={`${isArrowActive ? 'opacity-100 h-16' : 'opacity-0	h-2'} transition-all duration-500 absolute`}
                            style={{
                                background: 'rgba(255, 255, 255, 0.2)', width: '4rem',
                                top: '-8px', left: '-8px', borderRadius: '5px'
                            }}>
                            <p className={`${isArrowActive ? 'opacity-100 duration-1000' : 'opacity-0'} absolute bottom-1 left-2.5`}>
                                FA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
