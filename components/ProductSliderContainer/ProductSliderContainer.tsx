import React, { useState } from 'react';
import ProductSlider from '../ProductSlider/ProductSlider';
import { Carousel } from 'primereact/carousel';
import whiteSeed from '../../assets/Icons/whiteSeed.svg';
import greenSeed from '../../assets/Icons/greenSeed.svg';
import Image from 'next/image';

const ProductSliderContainer = (props: {
    data: any
}) => {

    const [currentPage, setCurrentPage] = useState(1);


    const carouselChange = (e: { page: React.SetStateAction<number>; }) => {
        setCurrentPage(e.page);
    }

    const productTemplate = (product: any) => {
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
            const isCurrentPage = currentPage === i;
            const seedImageStyle = {
                transform: i === 1 ? 'translateX(7rem)' : '',
                width: isCurrentPage ? '40px' : '30px',
            };

            const seedImage = (
                <div key={i}>
                    <Image
                        src={isCurrentPage ? greenSeed : whiteSeed}
                        alt={`seed`}
                        unoptimized
                        style={seedImageStyle}
                    />
                </div>
            );
            seedImages.push(seedImage);
        }

        return seedImages;
    };

    return (
        <div className='ProductSliderContainer w-full'
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic" data-aos-once={true}
            data-aos-duration="1500"
        >
            <div className='card relative'>
                <Carousel
                    showNavigators={false}
                    value={props.data}
                    numVisible={1}
                    numScroll={1}
                    className="custom-carousel"
                    circular={false}
                    autoplayInterval={5000}
                    itemTemplate={productTemplate}
                    showIndicators={true}
                    // onPageChange={carouselChange}
                    // page={currentPage}
                />
                <div className='flex flex-col gap-28 absolute'
                    style={{ top: '35%' }}
                >
                    {/* {renderSeedImages()} */}
                </div>
            </div>
        </div>
    );
};

export default ProductSliderContainer;
