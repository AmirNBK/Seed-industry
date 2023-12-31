'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import dynamic from 'next/dynamic'
import pic from '../assets/Images/heroSeed.png'
import ArrowComponent from '@/components/CommonComponents/ArrowComponent/ArrowComponent';
import AboutUs from '@/components/AboutUsSection/AboutUsSection';
import 'animate.css';
import Footer from '@/components/Footer/Footer';
import Blogs from '@/components/Blogs/Blogs';
import cursorBg from '../assets/Images/cursorLight.png'
import Values from '@/components/Values/Values';
import ProductSliderContainer from '@/components/ProductSliderContainer/ProductSliderContainer';
import HeroSectionText from '@/components/HeroSectionText/HeroSectionText';
import Lottie from "lottie-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GetStaticProps } from 'next'
import localFont from 'next/font/local';
const myFont = localFont({ src: '../assets/Fonts/mj.ttf' });
import animations from "../assets/animations/seedAnimation2.json";
import { getQueryAboutUs, getQueryBlogsHomepage, getQueryBlogsOurValues, getQueryHeader, getQueryProductsSlider } from '@/lib/service'
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent'
import useWindowSize from '@/Hooks/innerSize'
import ScrollButton from '@/components/ScrollButton/ScrollButton'
import RegularButton from '@/components/CommonComponents/RegularButton/RegularButton'
const CarouselSlider = dynamic(() => import("@/components/CarouselSlider/CarouselSlider"), {
  ssr: false,
});
const SmoothScroll = dynamic(() => import("../components/SmoothScroll/SmoothScroll"), {
  ssr: false,
});


const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});
const inter = Inter({ subsets: ['latin'] })

export default function Home({ header, aboutUs, productSlider, blogs, values }: {
  header: any, aboutUs: any, productSlider: any, blogs: any, values: any
}) {
  const [animationPlayedOnce, setAnimationPlayedOnce] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [animationFaded, setAnimationFaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [delay, setDelay] = useState(true)
  const [showCursor, setShowCursor] = useState(false);
  const [hoverContainer, setHoverContainer] = useState(false)
  const [onMainContainer, setOnMainContainer] = useState(false)
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const size = useWindowSize()

  const handleHoverChange = (isHoveredValue: boolean) => {
    // Check if isHoveredValue is true and there is a delay (2 seconds)
    if (isHoveredValue) {
      setShowCursor(true)
    } else {
      // Hide the cursor if not hovered or if there's no delay
      setShowCursor(false);
    }
  };


  const handleHoverContainer = () => {
    setHoverContainer(true)
  }


  useEffect(() => {
    const delay = setTimeout(() => {
      setAnimationFaded(true);
    }, 3500);
    return () => clearTimeout(delay);
  }, []);

  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])

  const cumulativeOffset = (element: any) => {
    let top = 0;
    let left = 0;
    while (element) {
      top += element.current?.offsetTop || 0;
      left += element.current?.offsetLeft || 0;
      element = element.offsetParent;
    }
    return { top, left };
  };

  const moveFunc = (event: any) => {
    const e = event || window.event;

    // Check if imageRef is defined and current is not undefined
    if (imageRef && imageRef.current) {
      const x = (e.pageX - cumulativeOffset(imageRef).left - (300 / 2)) * -1 / 100;
      const y = (e.pageY - cumulativeOffset(imageRef).top - (300 / 2)) * -1 / 100;

      // Check if scrollY is greater than 400
      if (scrollY > 400) {
        // Reset x and y values to 0
        const matrix = [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 1],
          [0, 0, 0, 1]
        ];

        imageRef.current.style.transition = 'all 0.35s'; // Add the transition inline
        imageRef.current.style.transform = `matrix3d(${matrix.toString()})`;
      } else {
        // Apply the regular transformation
        const matrix = [
          [1, 0, 0, -x * 0.00005],
          [0, 1, 0, -y * 0.00005],
          [0, 0, 1, 1],
          [0, 0, 0, 1]
        ];

        imageRef.current.style.transition = 'all 0.35s';
        imageRef.current.style.transform = `matrix3d(${matrix.toString()})`;
      }
    }
  };



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

      {
        size.width && size.width < 768 ?
          <main
            className={`flex flex-col items-center justify-between p-6 overflow-hidden ${inter.className}`}
            onMouseMoveCapture={moveFunc} id='myscrollbar'
            onMouseEnter={() => {
              setShowCursor(false)
            }}
          >
            <PrimeReactProvider>
              
              <BubbleComponent />
              <Header data={header.items} burgerMenuClick={() => {console.log('here');
              }} />
              {!(animationFaded && animationPlayedOnce) &&
                <Lottie animationData={animations} loop={false} className={`${animationPlayedOnce && 'animate__animated animate__bounceOutLeft'}`}
                  onComplete={() => setAnimationPlayedOnce(true)} />
              }
              {(animationPlayedOnce && animationFaded) &&
                <>
                  <div className='relative mt-6 md:mt-20'>
                    <div className='relative h-screen'>
                      <div className='relative lg:block md:p-0 px-12 block animate__animated  animate__zoomIn animate__slower
                    absolute left-1/2 top-1/3 
                    '
                        style={{ transform: `${size.width < 768 ? 'translate(-50%,-70%)' : 'translate(-50%,-50%)'}` }}
                      >
                        <Image src={pic} alt='pic'
                          ref={imageRef}
                          className='mx-auto dynamic-pic  w-full lg:w-544 lg:h-500 h-full' />
                        <div className='animate__lightSpeedInRight animate__animated animate__delay-1s animate__slow'>
                          <HeroSectionText />
                        </div>
                      </div>
                      <ArrowComponent />
                    </div>
                    <AboutUs data={aboutUs} />
                    <CarouselSlider />
                  </div>
                  <ProductSliderContainer data={productSlider.products[0].product} />
                  <Blogs data={blogs.blogsAndNews} onHoverChange={handleHoverChange} onHoverContainer={handleHoverContainer} />
                  <Values data={values.ourValues[0].singleValue} />
                  <Footer />
                </>
              }
            </PrimeReactProvider>
          </main>

          :
          <>
            <Header data={header.items} burgerMenuClick={() => {
              setBurgerMenu(!burgerMenu)
              }} />
            <SmoothScroll maxYTranslation={-2000}>
              <main
                className={`flex flex-col items-center justify-between overflow-hidden ${inter.className}`}
                onMouseMoveCapture={moveFunc} id='myscrollbar'
                onMouseEnter={() => {
                  setShowCursor(false)
                }}
              >
                <PrimeReactProvider>
                  <BubbleComponent />
                  {!(animationFaded && animationPlayedOnce) &&
                    <Lottie animationData={animations} loop={false} className={`${animationPlayedOnce && 'animate__animated animate__bounceOutLeft'}`}
                      onComplete={() => setAnimationPlayedOnce(true)} />
                  }
                  {(animationPlayedOnce && animationFaded) &&
                    <>
                      <div className='relative'>
                        <div className='relative h-screen translate-y-[110px]'>
                          <div className='relative mt-20 lg:block block animate__animated  animate__zoomIn animate__slower
                      absolute left-1/2 top-1/3 
                      '
                            style={{ transform: 'translate(-50%,-54%)' }}
                          >
                            <Image src={pic} alt='pic'
                              ref={imageRef}
                              className='mx-auto dynamic-pic  w-full lg:w-544 lg:h-500 h-full' />
                            <HeroSectionText />
                          </div>
                          <ArrowComponent />
                        </div>
                        <AboutUs data={aboutUs} />
                        <CarouselSlider />
                      </div>
                      <ProductSliderContainer data={productSlider.products[0].product} />
                      <Blogs data={blogs.blogsAndNews} onHoverChange={handleHoverChange} onHoverContainer={handleHoverContainer} />
                      <Values data={values.ourValues[0].singleValue} />
                      <Footer />
                    </>
                  }
                </PrimeReactProvider>
              </main>
            </SmoothScroll>
          </>
      }

    </>


  )
}


export const getStaticProps: GetStaticProps = async () => {
  const header = await getQueryHeader();
  const aboutUs = await getQueryAboutUs();
  const productSlider = await getQueryProductsSlider();
  const blogs = await getQueryBlogsHomepage();
  const values = await getQueryBlogsOurValues();



  return {
    props: {
      header,
      aboutUs,
      productSlider,
      blogs,
      values
    },
    revalidate: 3600,
  };
};
