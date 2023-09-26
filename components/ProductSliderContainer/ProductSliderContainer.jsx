import React, { useRef, useState, useEffect } from 'react';
import ProductSlider from '../ProductSlider/ProductSlider';
import { Carousel } from 'primereact/carousel';
import 'animate.css';
import localFont from 'next/font/local';
import Lottie, { LottieRef } from 'lottie-react';
import BubbleComponent from '../BubbleComponent/BubbleComponent';
import animations from '../../assets/animations/seedAnimation.json';
import useWindowSize from '@/Hooks/innerSize';
import greenSeed from '../../assets/Icons/greenSeed.svg';
import whiteSeed from '../../assets/Icons/whiteSeed.svg';
import Image from 'next/image';

const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' });

const ProductSliderContainer = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const size = useWindowSize();

    const seedImages = [
        { source: whiteSeed, alt: 'White Seed' },
        { source: whiteSeed, alt: 'White Seed' },
        { source: whiteSeed, alt: 'White Seed' },
    ];

    seedImages[currentPage] = { source: greenSeed, alt: 'Green Seed' };

    const carouselChange = (e) => {
        setCurrentPage(e.page);
    };

    const handleAnimationClick = (index) => {
        setCurrentPage(index);
    };

    const productTemplate = (product) => {
        return (
            <div>
                <ProductSlider
                    product={product.title}
                    description={product.description}
                    color={product.numberColor}
                    bgColor={product.boxColor}
                    textColor={product.textColor}
                    image={product.image.sourceUrl}
                    index={currentPage}
                />
            </div>
        );
    };

    const renderSeedImages = () => {
        return seedImages.map((seed, index) => (
            <div key={index} onClick={() => handleAnimationClick(index)}>
                <Image src={seed.source} alt={seed.alt}
                    style={{ transform: index === 1 ? 'translateX(110px)' : 'none', width: index === currentPage ? '40px' : '25px' }}
                />
            </div>
        ));
    };

    return (
        <div
            className='ProductSliderContainer w-full flex flex-col md:flex-row-reverse items-center'
            style={{ marginTop: `${size.width && size.width < 768 && '-200px'}` }}
        >
            <BubbleComponent />
            <h2 className={`${myFont.className} md:hidden block text-white text-5xl sm:text-7xl w-max mx-auto`}>
                محصولات
            </h2>
            <div className='card w-full md:w-10/12 ml-auto'>
                <Carousel
                    showNavigators={false}
                    value={props.data}
                    numVisible={1}
                    numScroll={1}
                    className='custom-carousel'
                    circular={false}
                    itemTemplate={productTemplate}
                    showIndicators={true}
                    onPageChange={carouselChange}
                    page={currentPage}
                />
            </div>
            <div className='flex flex-col gap-40'>{renderSeedImages()}</div>
        </div>
    );
};

export default ProductSliderContainer;
