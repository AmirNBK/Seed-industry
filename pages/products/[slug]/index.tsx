import Header from '@/components/Header/Header';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import localFont from 'next/font/local'
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
import productPic from '../../../assets/Images/product.png'
import Image from 'next/image';
import Product from '@/components/Product/Product';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Product/Navigation/Navigation';
import useWindowSize from '@/Hooks/innerSize';
import 'animate.css';
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
import 'animate.css';
import { useRouter } from 'next/router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import { getQueryHeader, getQuerySingleProducts } from '@/lib/service';
import { GetStaticProps } from 'next';
import Lottie from "lottie-react";
import animations from "../../../assets/animations/animation_llnnetcj.json";
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function SingleProduct() {
    const [imageContainerHeight, setImageContainerHeight] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [header, setHeader] = useState()
    const [query, setQuery] = useState<string | string[] | undefined>()
    const [productData, setProductData] = useState(null);
    const [animationPlayedOnce, setAnimationPlayedOnce] = useState(false);
    const [loading, setLoading] = useState(true)
    const elementRef = useRef(null);
    const ImageRef = useRef(null);
    const router = useRouter()
    const request = getQueryHeader();
    const productInfo = getQuerySingleProducts();

    useEffect(() => {
        request.then((res) => {
            setHeader(res.items);
        });

        productInfo.then((res) => {
            const productMatch = res.product.find((product) => product.id === router.query.slug);
            if (productMatch) {
                setProductData(productMatch);
                setLoading(false)
            }
        });
    }, [router.query.slug]);

    useEffect(() => {
        AOS.init();
        if (elementRef.current) {
            setImageContainerHeight(elementRef.current);
        }
        if (ImageRef.current) {
            setImageHeight(ImageRef.current);
        }
    }, [])

    const navigationItems = [
        { label: 'اطلاعات بذر', link: '#info' },
        { label: 'ویژگی های بذر', link: '#properties' },
        { label: 'جدول زمان بندی', link: '#timesheet' },
        { label: 'اجزا', link: '#components' },
    ];

    const onAnimationComplete = () => {
        console.log('here');

        setAnimationPlayedOnce(true);
    };

    console.log(animationPlayedOnce);


    return (
        <main
            className={`flex min-h-screen flex-col items-center overflow-hidden ${inter.className}`}
        >
            <AnimatedCursor
                innerSize={17}
                outerSize={250}
                color='255, 255, 255'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={1.3}
                outerStyle={{
                    backgroundColor: 'rgba(136, 219, 68, 0.90)',
                    filter: 'blur(97.5px)',
                    zIndex: '-1px'
                }}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
            <PrimeReactProvider>
                <div className='w-full p-6'>
                    <Header data={header} />
                </div>
                {(animationPlayedOnce && productData) && (
                    <div className='fixed animate__animated animate__fadeInUp' style={{ bottom: '40px', zIndex: '10' }}>
                        <Navigation items={navigationItems} />
                    </div>
                )}

                {!animationPlayedOnce && (
                    <Lottie animationData={animations} loop={true} onLoopComplete={() => setAnimationPlayedOnce(true)} />
                )}
                {(animationPlayedOnce && productData) && (
                    <div className='productContainer w-full flex flex-col xl:flex-row-reverse mt-20'
                    >
                        <div className='productContainer__pic border-b border-solid border-white xl:hidden block'
                            style={{ flex: '1.5' }}
                        >
                            <Image src={productPic} alt='pic' className='mx-auto xl:fixed left-1/2 xl:translate-x-full xl:p-0 pb-8 xl:w-80 w-5/12' unoptimized />

                        </div>
                        <div className='productContainer__pic border-l border-solid border-white xl:block hidden'
                            style={{ flex: '1.5' }} ref={elementRef}
                        >
                            <Image src={productPic} alt='pic'
                                ref={ImageRef}
                                className='mx-auto xl:fixed left-1/2 xl:translate-x-full xl:p-0 pb-8 xl:w-80 w-5/12' unoptimized />

                        </div>
                        <div style={{ flex: '2' }} className='mr-16 xl:p-0 pt-8 md:w-fit w-full md:p-0 px-4'>
                            <Product data={productData} />
                        </div>
                    </div>
                )}



            </PrimeReactProvider>

        </main>
    )
}

