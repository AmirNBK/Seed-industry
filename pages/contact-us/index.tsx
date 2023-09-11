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
const vazir = Vazirmatn({ subsets: ['latin'] });
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { getQueryContactUs, getQueryHeader, getQueryProductsPage } from '@/lib/service';
import useWindowSize from '@/Hooks/innerSize';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});
const SmoothScroll = dynamic(() => import("../../components/SmoothScroll/SmoothScroll"), {
    ssr: false,
});

export default function Contact({ header, data, searchData }: { header: any, data: any, searchData: any }) {

    const size = useWindowSize()

    useEffect(() => {
        AOS.init();
    }, [])

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
                            className={`flex flex-col items-center p-6 overflow-hidden ${inter.className}`}
                        >
                            <PrimeReactProvider>
                                <Header data={header.items} searchData={searchData} />
                                <ContactUs data={data} />
                            </PrimeReactProvider>

                        </main>
                        :

                        <SmoothScroll maxYTranslation={-450.355}>
                            <main
                                className={`flex flex-col items-center p-6 overflow-hidden ${inter.className}`}
                            >
                                <PrimeReactProvider>
                                    <Header data={header.items} searchData={searchData} />
                                    <ContactUs data={data} />
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
    const data = await getQueryContactUs();
    const searchData = await getQueryProductsPage();


    return {
        props: {
            header,
            data,
            searchData
        },
        revalidate: 3600,
    };
};
