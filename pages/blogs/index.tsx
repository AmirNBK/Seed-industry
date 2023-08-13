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

                <h1 className={`text-7xl ${myFont.className} text-white mt-20`}>
                    بلاگ ها
                </h1>

                <div className={`w-full text-white text-right mt-16 ${vazir.className}`}>
                    <h3 className='text-xl '> آخرین بلاگ ها </h3>
                </div>
                <div className='mt-6 flex flex-row-reverse gap-4'>
                    <div style={{ flex: '1' }}>
                        <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                            title={'نقش بذرهای با کیفیت در محصولات با عملکرد بالا'} width={576} height={499} isVertical
                            description='بذرهای با کیفیت اساسی‌ترین عامل برای محصولات با عملکرد عالی هستند. در این مقاله به بررسی تأثیر بذرهای برتر گرین‌سید بر رشد و عملکرد محصولات کشاورزی خواهیم پرداخت.' hasArrow />
                    </div>
                    <div style={{ flex: '1' }} className='flex flex-col gap-8'>
                        <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                            title={'نقش بذرهای با کیفیت در محصولات با عملکرد بالا'} width={310} height={207} isVertical={false}
                            description='ما در گرین‌سید به کشاورزی پایدار تعهد داریم و بذرهای ما به‌طور مسئولانه تولید می‌شوند...' hasArrow={false} />
                        <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                            title={'نقش بذرهای با کیفیت در محصولات با عملکرد بالا'} width={310} height={207} isVertical={false}
                            description='ما در گرین‌سید به کشاورزی پایدار تعهد داریم و بذرهای ما به‌طور مسئولانه تولید می‌شوند...' hasArrow={false} />
                        <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                            title={'نقش بذرهای با کیفیت در محصولات با عملکرد بالا'} width={310} height={207} isVertical={false}
                            description='ما در گرین‌سید به کشاورزی پایدار تعهد داریم و بذرهای ما به‌طور مسئولانه تولید می‌شوند...' hasArrow={false} />
                    </div>
                </div>

                <div className={`w-full text-white text-right mt-16 ${vazir.className}`}>
                    <h3 className='text-xl '> تمام بلاگ ها </h3>
                </div>

                <div className='grid grid-cols-3 gap-20 mt-12'>
                    <BlogsContainer image={blogpic2} author='آرش سعیدی' date='20 مرداد 1402'
                        title={'آشنایی با فناوری‌های جدید در تولید بذرهای گرین‌سید'} width={310} height={229} isVertical
                        description='در این مقاله، به جدیدترین فناوری‌ها و روش‌های کاربردی در تولید بذرهای شرکت گرین‌سید می‌پردازیم. از تکنیک‌های اصلاح ژنتیکی تا ...' hasArrow />
                    <BlogsContainer image={blogpic2} author='آرش سعیدی' date='20 مرداد 1402'
                        title={'آشنایی با فناوری‌های جدید در تولید بذرهای گرین‌سید'} width={310} height={229} isVertical
                        description='در این مقاله، به جدیدترین فناوری‌ها و روش‌های کاربردی در تولید بذرهای شرکت گرین‌سید می‌پردازیم. از تکنیک‌های اصلاح ژنتیکی تا ...' hasArrow />
                    <BlogsContainer image={blogpic2} author='آرش سعیدی' date='20 مرداد 1402'
                        title={'آشنایی با فناوری‌های جدید در تولید بذرهای گرین‌سید'} width={310} height={229} isVertical
                        description='در این مقاله، به جدیدترین فناوری‌ها و روش‌های کاربردی در تولید بذرهای شرکت گرین‌سید می‌پردازیم. از تکنیک‌های اصلاح ژنتیکی تا ...' hasArrow />
                    <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                        title={'آشنایی با فناوری‌های جدید در تولید بذرهای گرین‌سید'} width={310} height={229} isVertical
                        description='در این مقاله، به جدیدترین فناوری‌ها و روش‌های کاربردی در تولید بذرهای شرکت گرین‌سید می‌پردازیم. از تکنیک‌های اصلاح ژنتیکی تا ...' hasArrow />
                    <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                        title={'آشنایی با فناوری‌های جدید در تولید بذرهای گرین‌سید'} width={310} height={229} isVertical
                        description='در این مقاله، به جدیدترین فناوری‌ها و روش‌های کاربردی در تولید بذرهای شرکت گرین‌سید می‌پردازیم. از تکنیک‌های اصلاح ژنتیکی تا ...' hasArrow />
                    <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                        title={'آشنایی با فناوری‌های جدید در تولید بذرهای گرین‌سید'} width={310} height={229} isVertical
                        description='در این مقاله، به جدیدترین فناوری‌ها و روش‌های کاربردی در تولید بذرهای شرکت گرین‌سید می‌پردازیم. از تکنیک‌های اصلاح ژنتیکی تا ...' hasArrow />
                </div>

                <Footer />

            </PrimeReactProvider>

        </main>
    )
}
