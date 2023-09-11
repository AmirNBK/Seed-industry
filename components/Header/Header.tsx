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
            <div className='md:hidden block'>
                <Button icon="pi pi-align-justify" style={{ background: '#A4D0A4', borderRadius: '9000px', width: '70px', height: '70px' }}
                    onClick={() => setVisibleRight(true)} />
                <Sidebar visible={visibleRight} position="right"
                    onHide={() => setVisibleRight(false)}
                    style={{ background: '#EDEDED', fontFamily: '__Vazirmatn_253970' }}
                >
                    <div className='flex flex-col justify-between h-full'>
                        <div className='Header__items justify-between flex-col text-center justify-center gap-8 text-black flex flex-row-reverse'>
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
            <div className={`md:flex hidden Header animate__animated animate__slower animate__backInDown flex-col gap-6 xl:flex-row-reverse w-full justify-between items-center pb-6 ${vazir.className}`}
                style={{ borderBottom: '1px solid #fff' }}
            >
                <div className='Header__logo'>
                    <Image src={logo} alt='logo' />
                </div>
                <div className='Header__items flex-wrap justify-center gap-8 text-white flex flex-row-reverse md:gap-16 md:text-lg sm:text-sm text-xs'>
                    {props.data?.map((item: { label: { url: string; title: string } }, index: number) => (
                        <Link key={index} href={item.label.url} className='cursor-pointer text-lg'>
                            {item.label.title}
                        </Link>
                    ))}
                </div>

                <div className='Header__extraPart flex flex-row-reverse gap-6 items-center'>
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

                    <div className='Header__extraPart__languages text-white flex items-center gap-2 cursor-pointer'>
                        <p> EN </p>
                        <Image src={arrow} alt='arrow' className={`${styles.arrow}`} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
