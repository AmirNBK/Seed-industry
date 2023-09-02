import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Vazirmatn } from 'next/font/google';
import useWindowSize from "@/Hooks/innerSize";
import { useInView } from "react-intersection-observer";
const vazir = Vazirmatn({ subsets: ['latin'] });


const VerticalCarousel = ({ data }) => {
    const size = useWindowSize()
    const [activeIndex, setActiveIndex] = useState(0);
    const halfwayIndex = Math.ceil(data.length / 2);
    const itemHeight = 52;
    const shuffleThreshold = halfwayIndex * itemHeight;
    const visibleStyleThreshold = shuffleThreshold / 2;

    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    const determinePlacement = (itemIndex) => {
        if (activeIndex === itemIndex) return 0;
        if (itemIndex >= halfwayIndex) {
            if (activeIndex > itemIndex - halfwayIndex) {
                return (itemIndex - activeIndex) * itemHeight;
            } else {
                return -(data.length + activeIndex - itemIndex) * itemHeight;
            }
        }

        if (itemIndex > activeIndex) {
            return (itemIndex - activeIndex) * itemHeight;
        }

        if (itemIndex < activeIndex) {
            if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
                return (data.length - (activeIndex - itemIndex)) * itemHeight;
            }
            return -(activeIndex - itemIndex) * itemHeight;
        }
    };


    return (
        <div className="container mx-auto" ref={ref}>
            <section className="outer-container xl:flex-row flex-col lg:px-40">
                <div className={`${inView && 'animate__animated animate__fadeInLeft animate__slower'}
                carousel-wrapper sm:m-0 mt-12`}
                    style={{ marginBottom: `${size.width < 640 && '-60px'}` }}
                >
                    <div className="carousel">
                        <div className="slides">
                            <div className="carousel-inner">
                                {data.map((item, i) => {
                                    const translateY = determinePlacement(i);
                                    const transformedTranslateY = translateY === 52 ? (size.width > 640 ? translateY * 5.2 : translateY * 3.5) : translateY === -52 ? translateY * 2 : translateY;
                                    return (
                                        <div className="carousel-item-wrapper" key={item.id}>
                                            <button
                                                type="button"
                                                onClick={() => setActiveIndex(i)}
                                                className={cn(`carousel-item ${i === activeIndex ? 'carousel-item__active' :
                                                    'carousel-item__inactive'
                                                    }`, {
                                                    active: activeIndex === i,
                                                    visible:
                                                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                                                })}
                                                key={item.id}
                                                style={{
                                                    transform: `translateY(${transformedTranslateY}px)`,
                                                    fontWeight: '400',
                                                    // left: `${i === activeIndex && '250px'}`,
                                                    // bottom: `${i === activeIndex && '250px'}`,
                                                    color: `${i === activeIndex ? '#fff' : '#f5f5f5b3'}`
                                                }}
                                            >
                                                {item.introline}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`content ${inView && 'animate__animated animate__fadeInRight animate__slower'}`}>
                    <h2 className={`text-4xl ${vazir.className}`}> {data[activeIndex].title} </h2>
                    <hr className="w-1/12 mx-auto my-6" />
                    <p className={`text-lg font-extralight leading-loose ${vazir.className}`}
                        style={{ direction: 'rtl' }}
                    >{data[activeIndex].description}</p>
                </div>
            </section>
        </div>
    );
};

VerticalCarousel.propTypes = {
    data: PropTypes.array.isRequired,
};

export default VerticalCarousel;
