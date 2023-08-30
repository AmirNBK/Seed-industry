import React, { useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
import { ReactNode } from "react";


export default function Slider() {
    let slider = useRef()

    let scrollHandler = (event) => {
        scrollSlider(event.deltaY)
    }

    let scrollSlider = (scroolx) => {
        let sliderContainer = slider.current.querySelector(".swiper-wrapper");
        sliderContainer.classList.add("swiper-animation")
        let viewportWidth = window.innerWidth;

        if (sliderContainer.style.transform) {
            let transform = sliderContainer.style.transform;
            let strCcurrentX = transform.substring(12, transform.length).split(",")[0];
            let currentX = Number(strCcurrentX.substring(0, strCcurrentX.length - 2));

            console.log(scroolx);


            if (((currentX + scroolx) < 0 && (currentX + scroolx) > -viewportWidth)) {
                sliderContainer.style.transform = `translate3d(${currentX + scroolx}px,0,0)`
            }
            else if ((currentX + scroolx) < (-viewportWidth)) {
                sliderContainer.style.transform = `translate3d(-${viewportWidth}px,0,0)`

            }
            else {
                sliderContainer.style.transform = `translate3d(-0px,0,0)`

            }

        }


    }

    let clickHandler = (event) => {
        let sliderContainer = slider.current.querySelector(".swiper-wrapper");
        sliderContainer.classList.remove("swiper-animation")
    }


    return (

        <div onWheel={scrollHandler} className="scroll-container">
            <Swiper
                ref={slider}
                slidesPerView={3}
                freeMode={true}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, FreeMode, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide onClickCapture={clickHandler}>

                    <div className='image-container'>
                        <img src="../../assets/Images/pic2.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    onClickCapture={clickHandler}>
                    <div className='image-container'>
                        <img src="../../assets/Images/pic2.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide onClickCapture={clickHandler}>

                    <div className='image-container'>
                        <img src="../../assets/Images/pic2.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide onClickCapture={clickHandler}>

                    <div className='image-container'>
                        <img src="../../assets/Images/pic2.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide onClickCapture={clickHandler}>

                    <div className='image-container'>
                        <img src="../../assets/Images/pic2.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide onClickCapture={clickHandler}>

                    <div className='image-container'>
                        <img src="../../assets/Images/pic2.jpg" alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>

    )
}
