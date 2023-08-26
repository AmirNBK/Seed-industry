import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
import logo from '../../assets/Icons/logo.png'
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import arrow from '../../assets/Icons/arrow.svg'
import styles from './Header.module.css'
import Link from 'next/link';
import productPic from '../../assets/Images/product.png'

const Header = (props: {
    data: any
    searchData?: any
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


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

    console.log(searchResults);



    return (
        <div className={`Header flex flex-col gap-6 xl:flex-row-reverse w-full justify-between items-center pb-6 ${vazir.className}`}
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
    );
};

export default Header;
