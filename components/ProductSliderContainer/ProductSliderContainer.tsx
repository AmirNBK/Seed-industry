import React, { useState } from 'react';
import ProductSlider from '../ProductSlider/ProductSlider';
import seedPic1 from '../../assets/Images/seedPic.png';
import seedPic2 from '../../assets/Images/seedPic2.png';
import seedPic3 from '../../assets/Images/seedPic3.png';
import { Carousel } from 'primereact/carousel';

const ProductSliderContainer = (props: {
    data: any
}) => {
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

    return (
        <div className='ProductSliderContainer w-full'
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic" data-aos-once={true}
            data-aos-duration="1500"
        >
            <div className='card'>
                <Carousel
                    showNavigators={false}
                    value={props.data}
                    numVisible={1}
                    numScroll={1}
                    className="custom-carousel"
                    circular
                    // autoplayInterval={5000}
                    itemTemplate={productTemplate}
                    showIndicators={true}
                />
            </div>
        </div>
    );
};

export default ProductSliderContainer;
