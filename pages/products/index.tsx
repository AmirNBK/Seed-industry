import Header from '@/components/Header/Header';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import localFont from 'next/font/local'
import BlogsContainer from '@/components/BlogsContainer/BlogsContainer';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
import blogPic from '../../assets/Images/blogs-pic.jpeg'
import Footer from '@/components/Footer/Footer';
import blogpic2 from '../../assets/Images/blog-pic2.jpeg'
import ProductsComponent from './ProductsComponent/ProductsComponent';
import productPic from '../../assets/Images/product-1.png'

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function Blogs() {


    return (
        <main
            className={`flex min-h-screen flex-col items-center p-6 overflow-hidden ${inter.className}`}
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
                <Header />

                <div className='flex flex-col justify-center w-full'>
                    <div className='flex flex-col justify-center'>
                        <h1 className={`text-7xl ${myFont.className} text-center text-white mt-20`}>
                            مشاهده جدیدترین
                        </h1>

                        <h1 className={`text-7xl ${myFont.className} text-center text-white mt-20`} style={{ transform: 'translateX(-150px)' }}>
                            و آخرین محصولات
                        </h1>
                    </div>

                    <div className=' grid grid-cols-3 gap-12 mt-32'>
                        <ProductsComponent image={productPic} name='بذر شماره 1' description='برای تازه خوری ، فرآیند سازی و صادرات'
                            instruction={['۲۰۰ - ۵۰۰ سی‌سی', 'آبیاری متغذی']} color='#44A5DB'
                        />
                        <ProductsComponent image={productPic} name='بذر شماره 1' description='برای تازه خوری ، فرآیند سازی و صادرات'
                            instruction={['۲۰۰ - ۵۰۰ سی‌سی', 'آبیاری متغذی']} color='#44A5DB'
                        />
                        <ProductsComponent image={productPic} name='بذر شماره 1' description='برای تازه خوری ، فرآیند سازی و صادرات'
                            instruction={['۲۰۰ - ۵۰۰ سی‌سی', 'آبیاری متغذی']} color='#44A5DB'
                        />
                        <ProductsComponent image={productPic} name='بذر شماره 1' description='برای تازه خوری ، فرآیند سازی و صادرات'
                            instruction={['۲۰۰ - ۵۰۰ سی‌سی', 'آبیاری متغذی']} color='#44A5DB'
                        />
                        <ProductsComponent image={productPic} name='بذر شماره 1' description='برای تازه خوری ، فرآیند سازی و صادرات'
                            instruction={['۲۰۰ - ۵۰۰ سی‌سی', 'آبیاری متغذی']} color='#44A5DB'
                        />
                        <ProductsComponent image={productPic} name='بذر شماره 1' description='برای تازه خوری ، فرآیند سازی و صادرات'
                            instruction={['۲۰۰ - ۵۰۰ سی‌سی', 'آبیاری متغذی']} color='#44A5DB'
                        />
                    </div>
                </div>

                <Footer />

            </PrimeReactProvider>

        </main>
    )
}
