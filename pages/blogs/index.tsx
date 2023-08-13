import Header from '@/components/Header/Header';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import localFont from 'next/font/local'
import BlogsContainer from '@/components/BlogsContainer/BlogsContainer';
import blogPic from '../../assets/Images/blogs-pic.jpeg'

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

                <div className='mt-16 flex flex-row-reverse'>
                    <div style={{ flex: '1' }}>
                        <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                            title={'نقش بذرهای با کیفیت در محصولات با عملکرد بالا'} width={576} height={499} isVertical
                            description='بذرهای با کیفیت اساسی‌ترین عامل برای محصولات با عملکرد عالی هستند. در این مقاله به بررسی تأثیر بذرهای برتر گرین‌سید بر رشد و عملکرد محصولات کشاورزی خواهیم پرداخت.' hasArrow />
                    </div>
                    <div style={{ flex: '1' }}>
                        <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                            title={'نقش بذرهای با کیفیت در محصولات با عملکرد بالا'} width={310} height={207} isVertical={false}
                            description='بذرهای با کیفیت اساسی‌ترین عامل برای محصولات با عملکرد عالی هستند. در این مقاله به بررسی تأثیر بذرهای برتر گرین‌سید بر رشد و عملکرد محصولات کشاورزی خواهیم پرداخت.' hasArrow={false} />
                        <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                            title={'نقش بذرهای با کیفیت در محصولات با عملکرد بالا'} width={310} height={207} isVertical={false}
                            description='بذرهای با کیفیت اساسی‌ترین عامل برای محصولات با عملکرد عالی هستند. در این مقاله به بررسی تأثیر بذرهای برتر گرین‌سید بر رشد و عملکرد محصولات کشاورزی خواهیم پرداخت.' hasArrow={false} />
                        <BlogsContainer image={blogPic} author='آرش سعیدی' date='20 مرداد 1402'
                            title={'نقش بذرهای با کیفیت در محصولات با عملکرد بالا'} width={310} height={207} isVertical={false}
                            description='بذرهای با کیفیت اساسی‌ترین عامل برای محصولات با عملکرد عالی هستند. در این مقاله به بررسی تأثیر بذرهای برتر گرین‌سید بر رشد و عملکرد محصولات کشاورزی خواهیم پرداخت.' hasArrow={false} />
                    </div>
                </div>

            </PrimeReactProvider>

        </main>
    )
}
