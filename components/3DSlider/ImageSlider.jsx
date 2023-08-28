import React, { useEffect } from 'react';
import "swiper/css";
import "swiper/css/autoplay";
import pic from '../../assets/Images/sliderPic.jpeg'
import pic2 from '../../assets/Images/sliderPic2.jpeg'
import pic3 from '../../assets/Images/sliderPic3.jpeg'
import Image from 'next/image';
import styles from './ImageSlider.module.scss'

const ImageSlider = () => {

    useEffect(() => {
        let isDown = false;
        let startX;
        let scrollLeft;
        const slider = document.querySelector('.items');

        const end = () => {
            isDown = false;
            slider.classList.remove('active');
        }

        const start = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        }

        const move = (e) => {
            if (!isDown) return;

            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
            const dist = (x - startX);
            slider.scrollLeft = scrollLeft - dist;
        }

        slider.addEventListener('mousedown', start);
        slider.addEventListener('touchstart', start);

        slider.addEventListener('mousemove', move);
        slider.addEventListener('touchmove', move);

        slider.addEventListener('mouseleave', end);
        slider.addEventListener('mouseup', end);
        slider.addEventListener('touchend', end);
    }, []);

    return (
        <div data-aos="zoom-in" data-aos-duration="3000" data-aos-once={true} className={styles['track-wrapper']}
            style={{ width: '120%' }}
        >
            <ul className={`${styles['track']} items`}>
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
