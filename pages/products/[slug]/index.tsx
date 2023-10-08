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
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import 'animate.css';
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
import 'animate.css';
import { useRouter } from 'next/router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getQueryHeader, getQuerySingleProducts } from '@/lib/service';
import { GetStaticProps } from 'next';
import Lottie from "lottie-react";
import animations from "../../../assets/animations/seedAnimation2.json";
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
import { useInView } from 'react-intersection-observer';
import ProductPic from '@/components/ProductPic/ProductPic';
import ScrollButton from '@/components/ScrollButton/ScrollButton';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

const navigationItems = [
    { label: 'اطلاعات بذر', link: '#info' },
    { label: 'ویژگی های بذر', link: '#properties' },
    { label: 'جدول زمان بندی', link: '#timesheet' },
    { label: 'اجزا', link: '#components' },
];

export default function SingleProduct() {
    const [header, setHeader] = useState()
    const [productData, setProductData] = useState<{ productName: string } | null>(null);
    const [animationPlayedOnce, setAnimationPlayedOnce] = useState(false);
    const elementRef = useRef(null);
    const containerRef = useRef(null);
    const router = useRouter()
    const request = getQueryHeader();
    const productInfo = getQuerySingleProducts();
    const scrollYRef = useRef(0);
    const [animationFaded, setAnimationFaded] = useState(false);
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
    const [hoverContainer, setHoverContainer] = useState(false)


    const { ref, inView, entry } = useInView({
        triggerOnce: false
    });

    useEffect(() => {
        const delay = setTimeout(() => {
            setAnimationFaded(true);
        }, 3500);
        return () => clearTimeout(delay);
    }, []);



    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        request.then((res) => {
            setHeader(res.items);
        });
    }, []);

    useEffect(() => {
        if (router.query.slug) {
            productInfo.then((res) => {
                const productMatch = res.product.find((product: any) => product.id === router.query.slug);
                if (productMatch) {
                    setProductData(productMatch);
                }
            });
        }
    }, [router.query.slug]);

    return (
        <main
            ref={containerRef}
            className={`flex min-h-screen flex-col items-center overflow-hidden ${inter.className}`}
        >
            <AnimatedCursor
                innerSize={17}
                showSystemCursor={true}
                outerSize={burgerMenu ? 500 : 900}
                color='transparent'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={1.3}
                trailingSpeed={hoverContainer ? 2 : 35}
                outerStyle={{
                    backgroundImage: `url(https://i.imgur.com/PzokfXC.png)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    zIndex: burgerMenu ? '9000' : '-1'
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
                <ScrollButton />
                <div className='w-full '>
                    <Header data={header} burgerMenuClick={() => {
                        setBurgerMenu(!burgerMenu)
                    }} />
                </div>
                <BubbleComponent />
                {(animationPlayedOnce && productData && animationFaded) && (
                    <div className={`fixed animate__animated animate__fadeInUp ${inView && ' animate__animated animate__fadeOutDown'}`}
                        style={{ bottom: '40px', zIndex: '10' }}>
                        <Navigation items={navigationItems} />
                    </div>
                )}
                {!(animationFaded && animationPlayedOnce && productData) && (
                    <Lottie className={`${(animationPlayedOnce) && 'animate__animated animate__bounceOutLeft'}`}
                        animationData={animations} loop={false} onComplete={() => setAnimationPlayedOnce(true)} />
                )}
                {(animationPlayedOnce && productData && animationFaded) && (
                    <div className='productContainer w-full flex flex-col xl:flex-row-reverse mt-36'
                    >
                        <div className='productContainer__pic border-b border-solid border-white xl:hidden block'
                            style={{ flex: '1.5' }}
                        >
                            <Image src={productPic} alt='pic'
                                className={`mx-auto left-1/2 xl:translate-x-full xl:p-0 pb-8 xl:w-80 w-5/12`} unoptimized />

                        </div>
                        <ProductPic inView={inView} productName={productData.productName} pic={productPic} />
                        <div style={{ flex: '2' }} className='mr-16 xl:p-0 pt-8 md:w-fit w-full md:p-0 px-4'>
                            <Product data={productData} />
                        </div>
                    </div>
                )}
                <div ref={ref} className='w-full mt-16' >
                    <Footer isProduct={true} />
                </div>
            </PrimeReactProvider>

        </main>
    )
}

