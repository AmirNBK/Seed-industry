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
import HeroSectionImage from '@/components/HeroSectionImage/HeroSectionImage';
import ArrowComponent from '@/components/CommonComponents/ArrowComponent/ArrowComponent';
import AboutUs from '@/components/AboutUsSection/AboutUsSection';
import 'animate.css';
import Footer from '@/components/Footer/Footer';
import Blogs from '@/components/Blogs/Blogs';
import Values from '@/components/Values/Values';
import ProductSliderContainer from '@/components/ProductSliderContainer/ProductSliderContainer';
import HeroSectionText from '@/components/HeroSectionText/HeroSectionText';
import ImageSlider from '@/components/3DSlider/ImageSlider'
import Lottie from "lottie-react";
import { GetStaticProps } from 'next'
import animations from "../assets/animations/animation_llnpmcm5.json";
import { getQueryAboutUs, getQueryBlogsHomepage, getQueryBlogsOurValues, getQueryHeader, getQueryProductsSlider } from '@/lib/service'
import Scroll from '@/components/SmoothScroll/SmoothScroll'
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent'



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

        imageRef.current.style.transition = 'all 0.35s'; // Add the transition inline
        imageRef.current.style.transform = `matrix3d(${matrix.toString()})`;
      }
    }
  };



  return (

    <>
      <div>
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
        <main
          className={`flex min-h-screen flex-col items-center justify-between p-6 overflow-hidden ${inter.className}`}
          onMouseMoveCapture={moveFunc} id='myscrollbar'
        >
          <PrimeReactProvider>
            <BubbleComponent />
            <Header data={header.items} />
            {!(animationFaded && animationPlayedOnce) &&
              <Lottie animationData={animations} loop={false} className={`${animationPlayedOnce && 'animate__animated animate__bounceOutLeft'}`}
                onComplete={() => setAnimationPlayedOnce(true)} />
            }
            {(animationPlayedOnce && animationFaded) &&
              <>
                <div className='relative mt-20'>

                  <div className='relative lg:block block animate__animated  animate__zoomIn animate__slower'>
                    <Image src={pic} alt='pic'
                      ref={imageRef}
                      className='mx-auto dynamic-pic  w-full lg:w-544 lg:h-500 h-full' />
                    <div className='animate__lightSpeedInRight animate__animated animate__delay-1s animate__slow'>
                      <HeroSectionText />
                    </div>
                  </div>
                  <ArrowComponent />
                  <AboutUs data={aboutUs} />
                </div>
                <div className='sm:my-20 w-full' style={{ transform: 'rotateZ(7deg)' }}>
                  <ImageSlider />
                </div>
                <ProductSliderContainer data={productSlider.products[0].product} />
                <Blogs data={blogs.blogsAndNews} />
                <Values data={values.ourValues[0].singleValue} />
                <Footer />
              </>
            }
          </PrimeReactProvider>

        </main>
      </div>
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
