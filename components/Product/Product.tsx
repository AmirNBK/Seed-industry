import React from 'react';
import localFont from 'next/font/local';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' });
import { MenuItem } from 'primereact/menuitem';
import BreadCrumbComponent from '../CommonComponents/BreadCrumbComponent/BreadCrumbComponent';
import FeaturesContainer from '../CommonComponents/FeaturesContainer/FeaturesContainer';
import InfoContainer from './InfoContainer/InfoContainer';
import Infos from './Infos/Infos';
import TimeSheetTable from './TimeSheetTable/TimeSheetTable';
import ProductComponents from './ProductComponents/ProductComponents';
import 'animate.css';
import BubbleComponent from '../BubbleComponent/BubbleComponent';

interface FeatureItem {
    singleFeature: string;
}

const Product = (props: {
    data: any
}) => {
    const items: MenuItem[] = [{ label: 'محصولات' }, { label: 'بذرهای چمن' }, { label: 'کدوحلوایی هیبرید آنیسو ' }];

    const seedInfos = [{
        title: 'دوره رشد بذر', description: '90 - 100 روز'
    },
    {
        title: 'تیپ گیاه', description: 'نیمه بوته ای'
    },
    {
        title: 'شکل میوه', description: 'استوانه ای'
    },
    {
        title: 'پوست میوه', description: 'صاف'
    },
    {
        title: 'وزن میوه در تابستان', description: '2 - 3 کیلوگرم'
    },
    {
        title: 'بافت گوشت میوه', description: 'بسیار سفت'
    }
    ]

    const seedFeatures = [{
        title: 'مناسب فصل', description: 'مناسب برای تولید فصل گرم و فصل سرد'
    },
    {
        title: 'مناسب کشت', description: 'نیمه بوته ای'
    },
    {
        title: 'طعم', description: 'طعم عالی با رنگ مناسب'
    },
    {
        title: 'پتانسیل', description: 'پتانسیل با عملکرد بالا'
    },
    ]

    return (
        <div className='Product'>
            <div className='mb-12' data-aos-duration="1500" data-aos-once={true} data-aos="fade-down" data-aos-delay="900">
                <BreadCrumbComponent items={items} />
            </div>
            <div className='flex flex-col gap-4 items-end'>
                <h2 className={`text-5xl md:text-7xl md:text-right text-center text-white
                animate__animated animate__lightSpeedInLeft
                ${myFont.className}`}>
                    {props.data?.productName}
                </h2>
                <div className='my-6 flex flex-row md:justify-end gap-6 w-full justify-center md:w-fit animate__animated animate__lightSpeedInLeft '>
                    {props.data?.features.map((item: FeatureItem, index: number) => {
                        return (
                            <div key={index}>
                                <BubbleComponent />
                                <FeaturesContainer item={item.singleFeature} color='#EBDAB2' />
                            </div>
                        );
                    })}
                </div>

                <p style={{ direction: 'rtl' }} className={`animate__animated animate__lightSpeedInLeft text-white text-lg leading-loose ${vazir.className} md:w-7/12 text-center md:text-right font-extralight`}>
                    {props.data?.description}
                </p>
                <BubbleComponent />
                <InfoContainer key='info' title='اطلاعات بذر' content={<Infos items={seedInfos} />} link='info' />
                <InfoContainer key='properties' title='ویژگی های بذر' content={<Infos items={seedFeatures} />} link='properties' />
                <InfoContainer key='timesheet' title='جدول زمان بندی دوره کاشت' content={<TimeSheetTable />} link='timesheet' />
                <InfoContainer key='components' title='اجزا' content={<ProductComponents />} link='components' />

            </div>
        </div>
    );
};

export default Product;