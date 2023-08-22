import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import pic from '../../assets/Images/sliderPic.png'
import Image from 'next/image';

const ImageSlider = () => {
    return (
        <div className="w-screen">
            <Swiper
                style={{ transform: "rotate(4deg)" }}
                spaceBetween={50}
                slidesPerView={3}
            >
                {Array.from({ length: 20 }).map((res, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            unoptimized
                            alt=""
                            src={pic}
                            style={{ width: '650px', height: '470px', borderRadius: '25px' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
