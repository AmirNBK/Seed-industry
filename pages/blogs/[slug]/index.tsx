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
import useWindowSize from '@/Hooks/innerSize';
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
import { GetStaticProps } from 'next';
import { getQueryHeader } from '@/lib/service';
import Image from 'next/image';
import pic from '../../../assets/Images/blogs-pic.jpeg'
import Footer from '@/components/Footer/Footer';
import ScrollButton from '@/components/ScrollButton/ScrollButton';
const SmoothScroll = dynamic(() => import("../../../components/SmoothScroll/SmoothScroll"), {
    ssr: false,
});
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function SingleBlog({ header }: { header: any }) {

    const size = useWindowSize()

    return (
        <>
            <AnimatedCursor
                innerSize={17}
                outerSize={250}
                color='255, 255, 255'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={1.3}
                trailingSpeed={35}
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

            <main
                className={`flex flex-col items-center ml-4 ${inter.className}`}
            >
                <PrimeReactProvider>
                    <div className='w-full p-6'>
                        <Header data={header?.items} />
                    </div>
                    <BubbleComponent />
                    <ScrollButton />
                    <div className='singleBlogContainer mt-4'>
                        <Image src={pic} alt='pic' className='w-2/3	mx-auto' />
                        <h2 className={`${myFont.className} text-3xl text-white text-center mt-10`}>
                            نقش بذرهای با کیفیت در محصولات با عملکرد بالا
                        </h2>
                        <p className={`text-white text-center text-lg w-11/12 mx-auto ${vazir.className} mt-8`}>
                            بذرهای با کیفیت اساسی‌ترین عامل برای محصولات با عملکرد عالی هستند. در این مقاله به بررسی تأثیر بذرهای برتر گرین‌سید بر رشد و عملکرد محصولات کشاورزی خواهیم پرداخت.
                            بذرهای با کیفیت اساسی‌ترین عامل برای محصولات با عملکرد عالی هستند. در این مقاله به بررسی تأثیر بذرهای برتر گرین‌سید بر رشد و عملکرد محصولات کشاورزی خواهیم پرداخت.
                            بذرهای با کیفیت اساسی‌ترین عامل برای محصولات با عملکرد عالی هستند. در این مقاله به بررسی تأثیر بذرهای برتر گرین‌سید بر رشد و عملکرد محصولات کشاورزی خواهیم پرداخت.
                            بذرهای با کیفیت اساسی‌ترین عامل برای محصولات با عملکرد عالی هستند. در این مقاله به بررسی تأثیر بذرهای برتر گرین‌سید بر رشد و عملکرد محصولات کشاورزی خواهیم پرداخت.
                        </p>
                    </div>
                    <Footer animation={false} />
                </PrimeReactProvider>
            </main>

        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const header = await getQueryHeader();

    return {
        props: {
            header
        },
        revalidate: 3600,
    };
};

export async function getStaticPaths() {
    return {
        paths: [
            // String variant:
            '/blogs/2',
            // Object variant:
            { params: { slug: 'second-post' } },
        ],
        fallback: true,
    }
}
