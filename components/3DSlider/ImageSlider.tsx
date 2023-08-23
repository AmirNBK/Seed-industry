import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import pic from '../../assets/Images/sliderPic.jpeg'
import pic2 from '../../assets/Images/sliderPic2.jpeg'
import pic3 from '../../assets/Images/sliderPic3.jpeg'
import Image from 'next/image';
import styles from './ImageSlider.module.scss'

const ImageSlider = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="3000" data-aos-once={true} className={styles['track-wrapper']}
            style={{ width: '120%' }}
        >
            <ul className={styles['track']}>
                <li className={styles['track__item']}>
                    <Image className={styles['track__image']} unoptimized src={pic2} alt="" width={300} height={300} />
                </li>
                <li className={styles['track__item']}>
                    <Image className={styles['track__image']} unoptimized src={pic} alt="" width={300} height={300} />
                </li>
                <li className={styles['track__item']}>
                    <Image className={styles['track__image']} unoptimized src={pic2} alt="" width={300} height={300} />
                </li>
                <li className={styles['track__item']}>
                    <Image className={styles['track__image']} unoptimized src={pic} alt="" width={300} height={300} />
                </li>
                <li className={styles['track__item']}>
                    <Image className={styles['track__image']} unoptimized src={pic2} alt="" width={300} height={300} />
                </li>
                <li className={styles['track__item']}>
                    <Image className={styles['track__image']} unoptimized src={pic3} alt="" width={300} height={300} />
                </li>
                <li className={styles['track__item']}>
                    <Image className={styles['track__image']} unoptimized src={pic} alt="" width={300} height={300} />
                </li>
                <li className={styles['track__item']}>
                    <Image className={styles['track__image']} unoptimized src={pic3} alt="" width={300} height={300} />
                </li>
                <li className={styles['track__item']}>
                    <Image className={styles['track__image']} unoptimized src={pic2} alt="" width={300} height={300} />
                </li>
            </ul>
        </div>
    );
};

export default ImageSlider;
