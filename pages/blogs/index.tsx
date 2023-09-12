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
import { getQueryBlogs, getQueryHeader } from '@/lib/service';
import { GetStaticProps } from 'next';
import { StaticImageData } from 'next/image';
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
import useWindowSize from '@/Hooks/innerSize';
import ScrollButton from '@/components/ScrollButton/ScrollButton';
const SmoothScroll = dynamic(() => import("../../components/SmoothScroll/SmoothScroll"), {
    ssr: false,
});
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

type BlogData = {
    image: {
        sourceUrl: string;
    };
    author: string;
    date: string;
    title: string;
    description: string;
};

export default function Blogs({ header, data }: { header: any, data: any }) {

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
            {
                size.width && size.width < 768 ?
                    <main
                        className={`flex flex-col items-center p-6 overflow-hidden ${inter.className}`}
                    >
                        <ScrollButton />
                        <PrimeReactProvider>
                            <Header data={header.items} />
                            <BubbleComponent />
                            <h1 className={`text-7xl ${myFont.className} text-white mt-10 md:mt-20`}>
                                بلاگ ها
                            </h1>

                            <div className={`w-full text-white text-right mt-16 ${vazir.className}`}>
                                <h3 className='text-xl '> آخرین بلاگ ها </h3>
                            </div>
                            <div className='mt-6 flex flex-col xl:flex-row-reverse gap-4'>
                                <div style={{ flex: '1' }}>
                                    <BlogsContainer image={data[0].image.sourceUrl} author={data[0].author} date={data[0].date}
                                        title={data[0].title} width={576} height={499} isVertical
                                        description={data[0].description} hasArrow />
                                </div>
                                <div style={{ flex: '1' }} className='flex flex-col gap-8 md:flex hidden'>
                                    <BubbleComponent />
                                    {data.slice(1, 4).map((blog: { image: { sourceUrl: StaticImageData; }; author: string; date: string; title: string; description: string; }, index: number) => {
                                        return (
                                            <BlogsContainer
                                                key={index}
                                                image={blog.image.sourceUrl}
                                                author={blog.author}
                                                date={blog.date}
                                                title={blog.title}
                                                width={310}
                                                height={207}
                                                isVertical={false}
                                                description={blog.description}
                                                hasArrow={false}
                                            />
                                        )
                                    })}
                                </div>
                                <div style={{ flex: '1' }} className='flex flex-col gap-8 md:hidden flex'>
                                    <BubbleComponent />
                                    {data.slice(1, 4).map((blog: { image: { sourceUrl: StaticImageData; }; author: string; date: string; title: string; description: string; }, index: number) => {
                                        return (
                                            <BlogsContainer
                                                key={index}
                                                image={blog.image.sourceUrl}
                                                author={blog.author}
                                                date={blog.date}
                                                title={blog.title}
                                                width={310}
                                                height={207}
                                                isVertical={true}
                                                description={blog.description}
                                                hasArrow={false}
                                            />
                                        )
                                    })}
                                </div>
                            </div>

                            <div className={`w-full text-white text-right mt-16 ${vazir.className}`}>
                                <h3 className='text-xl '> تمام بلاگ ها </h3>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-16'>
                                <BubbleComponent />
                                {data.map((blog: { image: { sourceUrl: StaticImageData; }; author: string; date: string; title: string; description: string; }, index: number) => (
                                    <BlogsContainer
                                        key={index}
                                        image={blog.image.sourceUrl}
                                        author={blog.author}
                                        date={blog.date}
                                        title={blog.title}
                                        width={310}
                                        height={229}
                                        isVertical={true}
                                        description={blog.description}
                                        hasArrow={true}
                                    />
                                ))}
                            </div>

                            <BubbleComponent />

                            <Footer />

                        </PrimeReactProvider>

                    </main>
                    :
                    <SmoothScroll maxYTranslation={-800.355}>
                        <main
                            className={`flex flex-col items-center p-6 overflow-hidden ${inter.className}`}
                        >
                            <PrimeReactProvider>
                                <Header data={header.items} />
                                <BubbleComponent />

                                <h1 className={`text-7xl ${myFont.className} text-white mt-20`}>
                                    بلاگ ها
                                </h1>

                                <div className={`w-full text-white text-right mt-16 ${vazir.className}`}>
                                    <h3 className='text-xl '> آخرین بلاگ ها </h3>
                                </div>
                                <div className='mt-6 flex flex-col xl:flex-row-reverse gap-4'>
                                    <div style={{ flex: '1' }}>
                                        <BlogsContainer image={data[0].image.sourceUrl} author={data[0].author} date={data[0].date}
                                            title={data[0].title} width={576} height={499} isVertical
                                            description={data[0].description} hasArrow />
                                    </div>
                                    <div style={{ flex: '1' }} className='flex flex-col gap-8 md:flex hidden'>
                                        <BubbleComponent />
                                        {data.slice(1, 4).map((blog: { image: { sourceUrl: StaticImageData; }; author: string; date: string; title: string; description: string; }, index: number) => {
                                            return (
                                                <BlogsContainer
                                                    key={index}
                                                    image={blog.image.sourceUrl}
                                                    author={blog.author}
                                                    date={blog.date}
                                                    title={blog.title}
                                                    width={310}
                                                    height={207}
                                                    isVertical={false}
                                                    description={blog.description}
                                                    hasArrow={false}
                                                />
                                            )
                                        })}
                                    </div>
                                    <div style={{ flex: '1' }} className='flex flex-col gap-8 md:hidden flex'>
                                        <BubbleComponent />
                                        {data.slice(1, 4).map((blog: { image: { sourceUrl: StaticImageData; }; author: string; date: string; title: string; description: string; }, index: number) => {
                                            return (
                                                <BlogsContainer
                                                    key={index}
                                                    image={blog.image.sourceUrl}
                                                    author={blog.author}
                                                    date={blog.date}
                                                    title={blog.title}
                                                    width={310}
                                                    height={207}
                                                    isVertical={true}
                                                    description={blog.description}
                                                    hasArrow={false}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className={`w-full text-white text-right mt-16 ${vazir.className}`}>
                                    <h3 className='text-xl '> تمام بلاگ ها </h3>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-16'>
                                    <BubbleComponent />
                                    {data.map((blog: { image: { sourceUrl: StaticImageData; }; author: string; date: string; title: string; description: string; }, index: number) => (
                                        <BlogsContainer
                                            key={index}
                                            image={blog.image.sourceUrl}
                                            author={blog.author}
                                            date={blog.date}
                                            title={blog.title}
                                            width={310}
                                            height={229}
                                            isVertical={true}
                                            description={blog.description}
                                            hasArrow={true}
                                        />
                                    ))}
                                </div>

                                <BubbleComponent />

                                <Footer />

                            </PrimeReactProvider>

                        </main>
                    </SmoothScroll>
            }
        </>
    )
}



export const getStaticProps: GetStaticProps = async () => {
    const header = await getQueryHeader();
    const data = await getQueryBlogs();

    return {
        props: {
            header,
            data
        },
        revalidate: 3600,
    };
};
