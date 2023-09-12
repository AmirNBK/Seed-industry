import Header from '@/components/Header/Header';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import localFont from 'next/font/local'
import { Vazirmatn } from 'next/font/google';
import AboutUs from '@/components/AboutUs/AboutUs';
import { GetStaticProps } from 'next';
import { getQueryAboutUsPage, getQueryHeader } from '@/lib/service';
const vazir = Vazirmatn({ subsets: ['latin'] });
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
import useWindowSize from '@/Hooks/innerSize';
import ScrollButton from '@/components/ScrollButton/ScrollButton';
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' });
const SmoothScroll = dynamic(() => import("../../components/SmoothScroll/SmoothScroll"), {
    ssr: false,
});
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function About({ header, data }: {
    header: any, data: any
}) {

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
            <>
                {
                    size.width && size.width < 768 ?
                        <main
                            className={`flex flex-col items-center ml-4 ${inter.className}`}
                        >
                            <PrimeReactProvider>
                                <ScrollButton />

                                <div className='w-full p-6'>
                                    <Header data={header.items} />
                                </div>
                                <BubbleComponent />
                                <AboutUs data={data} />
                            </PrimeReactProvider>
                        </main>
                        :
                        <SmoothScroll maxYTranslation={-1950}>
                            <main
                                className={`flex flex-col items-center ${inter.className}`}
                            >
                                <PrimeReactProvider>
                                    <div className='w-full p-6'>
                                        <Header data={header.items} />
                                    </div>
                                    <BubbleComponent />
                                    <AboutUs data={data} />
                                </PrimeReactProvider>
                            </main>
                        </SmoothScroll>
                }
            </>
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const header = await getQueryHeader();
    const data = await getQueryAboutUsPage();


    return {
        props: {
            header,
            data
        },
        revalidate: 3600,
    };
};
