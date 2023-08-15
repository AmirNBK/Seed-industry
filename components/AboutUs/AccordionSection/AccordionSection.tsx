import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Circle from '@/components/CommonComponents/Circle/Circle';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/Fonts/mj.ttf' })

const AccordionSection = () => {
    return (
        <div className="card w-10/12 mx-auto flex flex-row-reverse my-20 items-baseline">
            <div className='flex flex-row items-center gap-2 justify-end flex-1'>
                <p className={`text-white ${myFont.className} text-xl text-right`}> نقاط قوت ما </p>
                <Circle color='#AAFC75' width={15} height={15} />
            </div>
            <div style={{ flex: '4' }}>
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