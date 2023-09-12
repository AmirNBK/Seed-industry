import React, { useRef, useState, useEffect } from 'react';
import ProductSlider from '../ProductSlider/ProductSlider';
import { Carousel } from 'primereact/carousel';
import 'animate.css';
import localFont from 'next/font/local'
import Lottie, { LottieRef } from "lottie-react";
import BubbleComponent from '../BubbleComponent/BubbleComponent';
import animations from "../../assets/animations/seedAnimation.json";
import useWindowSize from '@/Hooks/innerSize';
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })


const ProductSliderContainer = (props) => {

    const [currentPage, setCurrentPage] = useState(0);
    const animationRefs = [useRef(null), useRef(null), useRef(null)];
    const size = useWindowSize()


    const carouselChange = (e) => {
        setCurrentPage(e.page);
    }

    const handleAnimationClick = (index) => {
        setCurrentPage(index);
    }

    useEffect(() => {
        animationRefs[currentPage]?.current?.play();

        // Pause and reset animations for other pages
        animationRefs.forEach((ref, index) => {
            if (index !== currentPage && ref.current) {
                ref.current.pause();
                ref.current.goToAndStop(0);
            }
        });
    }, [currentPage]);

    const productTemplate = (product) => {
        return (
            <div>
                <ProductSlider
                    product={product.title}
                    description={product.description}
                    color={product.numberColor}
                    index={product.number}
                    bgColor={product.boxColor}
                    textColor={product.textColor}
                    image={product.image.sourceUrl}
                />
            </div>
        );
    };

    const renderSeedImages = () => {
        const seedImages = [];

        for (let i = 0; i < 3; i++) {
            const seedImage = (
                <div key={i} onClick={() => handleAnimationClick(i)}>
                    <Lottie
                        animationData={animations}
                        style={{
                            height: '150px',
                            transform: i === 1 ? 'translateX(110px)' : 'none',
                        }}
                        loop={false}
                        lottieRef={animationRefs[i]}
                    />
                </div>
            );
            seedImages.push(seedImage);
        }

        return seedImages;
    };


    return (
        <div className='ProductSliderContainer w-full flex flex-col md:flex-row-reverse items-center'
            style={{ marginTop: `${size.width && size.width < 768 && '-200px'}` }}
        >
            <BubbleComponent />
            <h2
                    className={`${myFont.className} md:hidden block text-white text-5xl sm:text-7xl w-max mx-auto`}
                  >
                    محصولات
                  </h2>
            <div className='card w-full md:w-10/12 ml-auto'>
                <Carousel
                    showNavigators={false}
                    value={props.data}
                    numVisible={1}
                    numScroll={1}
                    className="custom-carousel"
                    circular={false}
                    itemTemplate={productTemplate}
                    showIndicators={true}
                    onPageChange={carouselChange}
                    page={currentPage}
                />

            </div>
            <div className='flex flex-col gap-6 md:block hidden'>
                {renderSeedImages()}
            </div>
        </div>
    );
};

export default ProductSliderContainer;
