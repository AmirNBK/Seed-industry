import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Circle from '@/components/CommonComponents/Circle/Circle';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })

const AccordionSection = () => {
    return (
        <div className="card w-10/12 mx-auto flex lg:flex-row-reverse flex-col my-20 items-baseline">
            <div className='flex flex-row lg:w-auto w-full items-center gap-2 justify-center sm:justify-end flex-1'
                data-aos-duration="2000" data-aos-once={true} data-aos="fade-left"
            >
                <p className={`text-white ${myFont.className} text-2xl sm:text-xl sm:text-right`}> نقاط قوت ما </p>
                <Circle color='#AAFC75' width={15} height={15} />
            </div>
            <div style={{ flex: '4' }} className='lg:w-auto w-full'>
                <Accordion activeIndex={0}>
                    <AccordionTab header="اهداف ما">
                        <p className="m-0 text-base" style={{ direction: 'rtl', lineHeight: '40px' }}>
                            این شرکت در راستای گسترش ، پیشبرد و ارتقای دانش کشاورزی، پرورش نیرو های متخصص، بهبود بخشیدن به امور پژوهشی و مزارع آزمایشی، بهبود فناوری های مرتبط با دانش کشاورزی، برنامه ریزی و استفاده از تجارب کشور های مختلف و پیاده سازی آنها در زمینه افزایش بهره وری در بخش کشاورزی با استفاده از تکنولوژی روز دنیا و با ارائه محصولات با کیفیت از برند های معتبر و شناخته شده در سراسر دنیا و همچنین کمک به بهبود فاکتورهای اساسی و افزایش عملکرد در بخش توسعه پایدار میکوشد.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="آینده ما">
                        <p className="m-0" style={{ direction: 'rtl', lineHeight: '40px' }}>
                            این شرکت در راستای گسترش ، پیشبرد و ارتقای دانش کشاورزی، پرورش نیرو های متخصص، بهبود بخشیدن به امور پژوهشی و مزارع آزمایشی، بهبود فناوری های مرتبط با دانش کشاورزی، برنامه ریزی و استفاده از تجارب کشور های مختلف و پیاده سازی آنها در زمینه افزایش بهره وری در بخش کشاورزی با استفاده از تکنولوژی روز دنیا و با ارائه محصولات با کیفیت از برند های معتبر و شناخته شده در سراسر دنیا و همچنین کمک به بهبود فاکتورهای اساسی و افزایش عملکرد در بخش توسعه پایدار میکوشد.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="صنعت ما">
                        <p className="m-0" style={{ direction: 'rtl', lineHeight: '40px' }}>
                            این شرکت در راستای گسترش ، پیشبرد و ارتقای دانش کشاورزی، پرورش نیرو های متخصص، بهبود بخشیدن به امور پژوهشی و مزارع آزمایشی، بهبود فناوری های مرتبط با دانش کشاورزی، برنامه ریزی و استفاده از تجارب کشور های مختلف و پیاده سازی آنها در زمینه افزایش بهره وری در بخش کشاورزی با استفاده از تکنولوژی روز دنیا و با ارائه محصولات با کیفیت از برند های معتبر و شناخته شده در سراسر دنیا و همچنین کمک به بهبود فاکتورهای اساسی و افزایش عملکرد در بخش توسعه پایدار میکوشد.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};

export default AccordionSection;