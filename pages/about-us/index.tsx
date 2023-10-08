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
import { useState } from 'react';
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
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
    const [hoverContainer, setHoverContainer] = useState(false)

    return (
        <>
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
            <>
                {
                    size.width && size.width < 768 ?
                        <main
                            className={`flex flex-col items-center ml-4 ${inter.className}`}
                        >
                            <PrimeReactProvider>
                                
                                <div className='w-full p-6'>
                                    <Header data={header.items} />
                                </div>
                                <BubbleComponent />
                                <AboutUs data={data} />
                            </PrimeReactProvider>
                        </main>
                        :
                        <>
                        <div className='w-full'>
                        <Header data={header.items} burgerMenuClick={() => {
                            setBurgerMenu(!burgerMenu)
                        }} />
                    </div>
                        <SmoothScroll maxYTranslation={-1950}>
                            <main
                                className={`flex flex-col items-center ${inter.className}`}
                            >
                                <PrimeReactProvider>
                                    <BubbleComponent />
                                    <AboutUs data={data} />
                                </PrimeReactProvider>
                            </main>
                        </SmoothScroll>
                        </>
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
