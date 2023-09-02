import React, { useState } from 'react';
import localFont from 'next/font/local'
import ValuesContainer from './ValuesContainer/ValuesContainer';
import ResearchIcon from '@/assets/Icons/magnifier';
import BubbleComponent from '../BubbleComponent/BubbleComponent';
import { useInView } from 'react-intersection-observer';
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })
import 'animate.css';

interface ValueItem {
    title: string;
    description: string;
}


const Values = (props: {
    data: any
}) => {

    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });
    const [activeIndex, setActiveIndex] = useState(null);

    const handleContainerClick = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const handleContainerClose = () => {
        setActiveIndex(null)
    };

    return (
        <div className={`${inView && 'animate__animated animate__backInRight animate__slower'} Values  w-full mb-32 mt-16`}
            ref={ref}
        >
            <BubbleComponent />
            <h2
                className={`${myFont.className} Blogs__title text-white text-5xl sm:text-7xl w-max ml-auto mr-12`}>
                ارزش های ما
            </h2>
            <div className='relative sm:left-1/2 sm:translate-x-120 sm:block flex flex-col'
                style={{ paddingBottom: "600px", top: '200px' }}>
                {props.data.map((value: ValueItem, index: number) => {
                    const topPosition = `${-26 + index * 13}%`;
                    const leftPosition = index > 0 ? `${-30 * index}px` : '';

                    return (
                        <ValuesContainer
                            key={index}
                            bgColor='#324225'
                            icon={<ResearchIcon color={'#aafc75'} />}
                            title={value.title}
                            description={value.description}
                            topPosition={topPosition}
                            leftPosition={leftPosition}
                            onToggleClick={() => handleContainerClick(index)}
                            onToggleClose={() => handleContainerClose()}
                            index={index}
                            activeIndex={activeIndex}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Values;