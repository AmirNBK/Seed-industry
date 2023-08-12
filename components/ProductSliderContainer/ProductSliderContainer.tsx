import React, { useState } from 'react';
import ProductSlider from '../ProductSlider/ProductSlider';
import seedPic1 from '../../assets/Images/seedPic.png';
import seedPic2 from '../../assets/Images/seedPic2.png';
import seedPic3 from '../../assets/Images/seedPic3.png';
import { Carousel } from 'primereact/carousel';

const ProductSliderContainer = () => {

    const productData = [
        {
            product: 'محصول شماره یک',
            description: 'اکتشاف عالمی از محصولات کشاورزی برتر مشاوره فنی توسط متخصصان حرفه‌ای تمرکز بر کیفیت بی‌نظیر',
            color: '#fff',
            index: 1,
            textColor: '#575C54',
            bgColor: '#ffffffd9',
            image: seedPic1,
        },
        {
            product: 'محصول شماره دو',
            description: 'اکتشاف عالمی از محصولات کشاورزی برتر مشاوره فنی توسط متخصصان حرفه‌ای تمرکز بر کیفیت بی‌نظیر',
            color: '#FFD074',
            index: 2,
            bgColor: '#ffd074b3',
            textColor: '#fff',
            image: seedPic2,
        },
        {
            product: 'محصول شماره سه',
            description: 'اکتشاف عالمی از محصولات کشاورزی برتر مشاوره فنی توسط متخصصان حرفه‌ای تمرکز بر کیفیت بی‌نظیر',
            color: '#E1783C',
            index: 3,
            bgColor: '#e1783cb3',
            textColor: '#fff',
            image: seedPic3,
        },
    ];

    const productTemplate = (product: any) => {
        return (
            <div>
                <ProductSlider
                    product={product.product}
                    description={product.description}
                    color={product.color}
                    index={product.index}
                    bgColor={product.bgColor}
                    textColor={product.textColor}
                    image={product.image}
                />
            </div>
        );
    };

    return (
        <div className='ProductSliderContainer w-full'>
            <div style={{ marginTop: '150px' }} className='card'>
                <Carousel
                    showNavigators={true}
                    orientation="vertical"
                    value={productData}
                    numVisible={1}
                    numScroll={1}
                    className="custom-carousel"
                    circular
                    autoplayInterval={3000}
                    itemTemplate={productTemplate}
                    showIndicators={false}
                />
            </div>
        </div>
    );
};

export default ProductSliderContainer;
