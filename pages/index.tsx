'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import dynamic from 'next/dynamic'
import pic from '../assets/Images/heroSeed.png'
import HeroSectionImage from '@/components/HeroSectionImage/HeroSectionImage';
import ArrowComponent from '@/components/CommonComponents/ArrowComponent/ArrowComponent';
import AboutUs from '@/components/AboutUsSection/AboutUsSection';
import Footer from '@/components/Footer/Footer';
import Blogs from '@/components/Blogs/Blogs';
import Values from '@/components/Values/Values';
import ProductSliderContainer from '@/components/ProductSliderContainer/ProductSliderContainer';
import HeroSectionText from '@/components/HeroSectionText/HeroSectionText';
import ImageSlider from '@/components/3DSlider/ImageSlider'



const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cursorEntered, setCursorEntered] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (!cursorEntered) {
        setCursorEntered(true);
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorEntered]);


  return (

    <>
      <div id="smooth-content">
        <main
          className={`flex min-h-screen flex-col items-center justify-between p-6 overflow-hidden ${inter.className}`}
        >
          <PrimeReactProvider>
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
            <Header />
            <div className='relative mt-20'>
              <div className='lg:block hidden'>
                <HeroSectionImage
                  style={{
                    background: `url(${pic}) no-repeat fixed center`,
                    backgroundSize: 'fit',
                  }}
                >
                  <HeroSectionImage>
                    <Image src={pic} alt="" className='mx-auto my-auto' unoptimized />
                  </HeroSectionImage>
                  <div className={`${cursorEntered ? 'block' : 'hidden'}`}>
                  </div>
                </HeroSectionImage>
                <div className={`${cursorEntered && ''} absolute`} style={{ top: '26.5%', left: '50%' }}>
                  <HeroSectionText />
                </div>
              </div>

              <div className='relative lg:hidden block'>
                <Image src={pic} alt='pic' className='mx-auto w-full lg:w-72 ' />
                <HeroSectionText />
              </div>
              <ArrowComponent />
              <AboutUs />
            </div>
          </PrimeReactProvider>
          <div className='my-20'>
            <ImageSlider />
          </div>
          <ProductSliderContainer />
          <Blogs />
          <Values />
          <Footer />
        </main>
      </div>
    </>
  )
}
