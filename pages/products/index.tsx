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
import ProductsComponent from '../../components/ProductsComponent/ProductsComponent';
import productPic from '../../assets/Images/product.png'
import { TabView, TabPanel } from 'primereact/tabview';
import RegularButton from '@/components/CommonComponents/RegularButton/RegularButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import 'animate.css';
import { GetStaticProps } from 'next';
import { getQueryHeader, getQueryProductsPage } from '@/lib/service';
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
const SmoothScroll = dynamic(() => import("../../components/SmoothScroll/SmoothScroll"), {
    ssr: false,
});
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

type ProductItem = {
    productName: string;
    description: string;
    instructions: any[];
    color: string;
    id: string;
};

export default function Blogs({ header, data }: {
    header: any, data: any
}) {
    const [displayedItems, setDisplayedItems] = useState(3);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [height, setHeight] = useState(0)

    // let height = localStorage.getItem('viewportHeight')

    // console.log(height);



    const handleShowMoreClick = () => {
        setTimeout(() => {
            setDisplayedItems(displayedItems + 3);
            setButtonClicked(false)
        }, 700);
    };

    useEffect(() => {
        let value = localStorage.getItem("viewportHeight") || "";
        setHeight(value)
        AOS.init();
    }, [])

    console.log(height);
    

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

            <SmoothScroll>
                <main
                    className={`flex flex-col items-center p-6 overflow-hidden ${inter.className}`}
                >
                    <PrimeReactProvider>
                        <Header data={header.items} />
                        <BubbleComponent />
                        <div className='flex flex-col justify-center w-full'>
                            <div className='flex flex-col justify-center'>
                                <h1 className={`text-4xl md:text-5xl lg:text-7xl ${myFont.className} text-center text-white mt-20`}
                                    data-aos-duration="1500" data-aos-once={true} data-aos="fade-left"
                                >
                                    مشاهده جدیدترین
                                </h1>

                                <h1
                                    data-aos-duration="1500" data-aos-once={true} data-aos="fade-right"
                                    className={`text-4xl md:text-5xl lg:text-7xl ${myFont.className} text-center text-white mt-10 lg:mt-20 lg:translate-x-250`}>
                                    و آخرین محصولات
                                </h1>
                            </div>
                            <div className='mt-12 lg:mt-28 relative'>
                                <hr className='absolute w-1/4 hidden sm:block xl:w-37'
                                    style={{ color: '#EBDAB2', backgroundColor: '#EBDAB2', borderColor: '#EBDAB2', top: '25px', left: '-25px' }} />
                                <hr className='absolute hidden sm:block sm:w-1/4 xl:w-37'
                                    style={{ color: '#EBDAB2', backgroundColor: '#EBDAB2', borderColor: '#EBDAB2', top: '25px', right: '-25px' }} />
                                <TabView >
                                    <TabPanel header="بذر های سبز سیف">
                                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-32'
                                            data-aos-duration="1500" data-aos-once={true} data-aos="zoom-in-up"
                                        >
                                            {data.greenSeed[0].product.slice(0, displayedItems).map((item: ProductItem, index: number) => {
                                                return (
                                                    <ProductsComponent
                                                        key={index}
                                                        image={productPic}
                                                        name={item.productName}
                                                        description={item.description}
                                                        instruction={item.instructions}
                                                        color={item.color}
                                                        link={item.id}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <div className={`flex flex-row items-center gap-6 my-32 ${buttonClicked ? 'animate__animated animate__bounceOutDown' : ''}`}>
                                            <hr className='flex-1' style={{ borderColor: '#EBDAB2' }} />
                                            <RegularButton
                                                onClick={() => {
                                                    handleShowMoreClick();
                                                    setButtonClicked(true);
                                                }}
                                                text='مشاهده بیشتر'
                                            />
                                            <hr className='flex-1' style={{ borderColor: '#EBDAB2' }} />
                                        </div>

                                    </TabPanel>
                                    <TabPanel header="بذر های چمن">
                                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-32'
                                        >
                                            {data.grassSeed[0].product.slice(0, displayedItems).map((item: ProductItem, index: number) => {
                                                return (
                                                    <ProductsComponent
                                                        key={index}
                                                        image={productPic}
                                                        name={item.productName}
                                                        description={item.description}
                                                        instruction={item.instructions}
                                                        color={item.color}
                                                        link={item.id}
                                                    />
                                                )
                                            })}
                                        </div>
                                        <div className={`flex flex-row items-center gap-6 my-32 ${buttonClicked ? 'animate__animated animate__bounceOutDown' : ''}`}>
                                            <hr className='flex-1' style={{ borderColor: '#EBDAB2' }} />
                                            <RegularButton
                                                onClick={() => {
                                                    handleShowMoreClick();
                                                    setButtonClicked(true);
                                                }}
                                                text='مشاهده بیشتر'
                                            />
                                            <hr className='flex-1' style={{ borderColor: '#EBDAB2' }} />
                                        </div>
                                    </TabPanel>
                                </TabView>
                            </div>
                        </div>

                        <Footer />

                    </PrimeReactProvider>

                </main>
            </SmoothScroll>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const header = await getQueryHeader();
    const data = await getQueryProductsPage();


    return {
        props: {
            header,
            data
        },
        revalidate: 3600,
    };
};
