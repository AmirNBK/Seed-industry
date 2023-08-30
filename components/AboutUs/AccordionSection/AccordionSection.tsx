import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Circle from '@/components/CommonComponents/Circle/Circle';
import localFont from 'next/font/local'
import BubbleComponent from '@/components/BubbleComponent/BubbleComponent';
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })

const AccordionSection = (props: {
    data: any
}) => {

    return (
        <div className="card w-10/12 mx-auto flex lg:flex-row-reverse flex-col my-20 items-baseline">
            <BubbleComponent />
            <div className='flex flex-row lg:w-auto w-full items-center gap-2 justify-center sm:justify-end flex-1'
            >
                <p className={`text-white ${myFont.className} text-2xl sm:text-xl sm:text-right`}> نقاط قوت ما </p>
                <Circle color='#AAFC75' width={15} height={15} />
            </div>
            <div style={{ flex: '4' }} className='lg:w-auto w-full'>
                <Accordion activeIndex={0}>
                    {props.data.map((item: any, index: number) => (
                        <AccordionTab key={index} header={item.title}>
                            <p className="m-0 text-base" style={{ direction: 'rtl', lineHeight: '40px' }}>
                                {item.description}
                            </p>
                        </AccordionTab>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default AccordionSection;