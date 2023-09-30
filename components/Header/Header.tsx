import Image from 'next/image';
import localFont from 'next/font/local'
import React, { useEffect, useState } from 'react';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
import logo from '../../assets/Icons/logo-psb.png'
import logoTextFa from '../../assets/Icons/logoTextFa.png'
import logoTextEn from '../../assets/Icons/logotext.png'
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import arrow from '../../assets/Icons/arrow.svg'
const myFont = localFont({ src: '../../assets/Fonts/BYekan+.ttf' })
const myFontBold = localFont({ src: '../../assets/Fonts/BYekan+ Bold.ttf' })
import styles from './Header.module.css'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Hamburger from 'hamburger-react'
import 'animate.css';
import productPic from '../../assets/Images/product.png'
import useScrollDirection from '@/Hooks/scrollDirection';


const Header = (props: {
    data: any
    searchData?: any
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
    const [isArrowActive, setIsArrowActive] = useState(false);
    const scrollDirection = useScrollDirection();
    const burgerMenuItems = ['درباره ما', 'محصولات', 'کاتالوگ', 'وبلاگ', 'ارتباط با ما']

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
                        background: '#78b944', borderRadius: '9000px',
                        width: '70px', height: '70px'
                    }}
                        onClick={() => setVisibleRight(true)} />
                    <Image src={logo} alt='logo' className='mr-auto' unoptimized />
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
                            <Image src={logo} alt='logo' className='mx-auto' unoptimized />
                        </div>
                    </div>
                </Sidebar>
            </div>
            <div
                style={{ zIndex: '10000' }}
                className={`md:flex fixed transition-all duration-1000 ${scrollDirection === "down" ? "-top-72" : "top-0"} hidden Header p-6 animate__animated animate__slower animate__backInDown flex-col gap-6 xl:flex-row w-full justify-between items-center pb-6 ${vazir.className}`}
            >
                <div className='Header__logo flex flex-row items-center gap-4'>
                    <Image src={logo} alt='logo' unoptimized />
                    <div className={`${burgerMenu ? 'hidden' : 'flex'} text-white flex-col gap-2 translate-y-3 items-center font-extrabold text-xl ${myFontBold.className}`}>
                        <p> پیشگامان صنعت و بذر </p>
                        <p> Pishgaman Sanat Va bazr Co. </p>
                    </div>
                    <div className={`${burgerMenu ? 'flex' : 'hidden'}  flex-col gap-2 translate-y-3 items-center font-extrabold text-xl ${myFontBold.className}`}>
                        <p> پیشگامان صنعت و بذر </p>
                        <p> Pishgaman Sanat Va bazr Co. </p>
                    </div>
                </div>

                <div className='Header__extraPart flex flex-row gap-6 items-center'>
                    <div className={`${burgerMenu && 'hidden'}`}>
                        <span className="p-input-icon-right">
                            <i className="pi pi-search" />
                            <InputText
                                style={{ borderRadius: '9999px', textAlign: 'right', direction: 'rtl', background: 'transparent' }}
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

                    <Hamburger toggled={burgerMenu} toggle={setBurgerMenu} color={burgerMenu ? 'black' : 'white'}
                        rounded size={26}
                    />
                    <div className={`${burgerMenu && 'opacity-0'} Header__extraPart__languages relative text-white flex items-center gap-2 cursor-pointer`}
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

            <div className={`${burgerMenu ? 'animate__animated animate__fadeIn animated-slow z-[2000]' : 'animate__animated animate__fadeOut animated-slow'}
            burgerMenu bg-white w-screen h-screen fixed rounded-b-[100px]`}>
                <div className='flex flex-col items-center text-5xl gap-10 left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/2'>
                    {burgerMenuItems.map((item) => {
                        return (
                            <p className={`${myFont.className} cursor-pointer opacity-50 hover:opacity-100 duration-500`}>
                                {item}
                            </p>
                    )
                    })}
                </div>
            </div>


            <style>
                {`
                .hamburger-react {
                    background: #78b944;
                    border-radius : 9999px;
                    z-index : 200000;
                    width : 70px !important;
                    height : 70px !important;
                }
                .hamburger-react div {
                    ${!burgerMenu &&
                    `
                left : 20px !important;
                transform : translateY(12px) !important;
                `
                    }
                }
                
                `}
            </style>
        </>
    );
};

export default Header;
