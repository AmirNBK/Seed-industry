import Header from '@/components/Header/Header';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import localFont from 'next/font/local'
import { Vazirmatn } from 'next/font/google';
import ContactUs from '@/components/ContactUs/ContactUs';
import AboutUs from '@/components/AboutUs/AboutUs';
const vazir = Vazirmatn({ subsets: ['latin'] });
import productPic from '../../../assets/Images/product-1.png'
import Image from 'next/image';
import Product from '@/components/Product/Product';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Product/Navigation/Navigation';
import useWindowSize from '@/Hooks/innerSize';
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function About() {

    const size = useWindowSize();

    const navigationItems = [
        { label: 'اطلاعات بذر', link: '#info' },
        { label: 'ویژگی های بذر', link: '#properties' },
        { label: 'جدول زمان بندی', link: '#timesheet' },
        { label: 'اجزا', link: '#components' },
    ];

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
                    <Header />
                </div>
                <div className='fixed' style={{ bottom: '40px', zIndex: '10' }}>
                    <Navigation items={navigationItems} />
                </div>
                <div className='productContainer w-full flex flex-col xl:flex-row-reverse mt-20'
                >
                    <div className='productContainer__pic border-b border-solid border-white xl:hidden block'
                        style={{ flex: '1.5' }}
                    >
                        <Image src={productPic} alt='pic' className='mx-auto xl:fixed left-1/2 xl:translate-x-full xl:p-0 pb-8 xl:w-80 w-5/12' unoptimized />

                    </div>
                    <div className='productContainer__pic border-l border-solid border-white xl:block hidden'
                        style={{ flex: '1.5' }}
                    >
                        <Image src={productPic} alt='pic' className='mx-auto xl:fixed left-1/2 xl:translate-x-full xl:p-0 pb-8 xl:w-80 w-5/12' unoptimized />

                    </div>
                    <div style={{ flex: '2' }} className='mr-16 xl:p-0 pt-8 md:w-fit w-full md:p-0 px-4'>
                        <Product />
                    </div>
                </div>

                <Footer />
            </PrimeReactProvider>

        </main>
    )
}
