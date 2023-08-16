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

const Product = () => {
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
            <div className='mb-12'>
                <BreadCrumbComponent items={items} />
            </div>
            <div className='flex flex-col gap-4 items-end'>
                <h2 className={`text-7xl text-white text-right ${myFont.className}`}>
                    کدوحلوایی هیبرید آنیسو
                </h2>
                <div className='my-6 flex flex-row justify-end gap-6 '>
                    <FeaturesContainer item='آبیاری متغذی' color='#EBDAB2' />
                    <FeaturesContainer item='آبیاری متغذی' color='#EBDAB2' />
                    <FeaturesContainer item='آبیاری متغذی' color='#EBDAB2' />
                </div>

                <p style={{ direction: 'rtl' }} className={`text-white text-lg leading-loose ${vazir.className} w-7/12 text-right font-extralight`}>
                    کدوحلوایی شیرین و ملایم با آنیسو تازه و معطر، ترکیبی جذاب از شیرینی و ملایمی را به همراه عمق طعم فراهم می‌کنند که به‌طور انحصاری می‌تواند سلیقه‌های مختلف را جذب کند.
                </p>
                <InfoContainer title='اطلاعات بذر' content={<Infos items={seedInfos} />} />
                <InfoContainer title='ویژگی های بذر' content={<Infos items={seedFeatures} />} />
                <InfoContainer title='جدول زمان بندی دوره کاشت' content={<TimeSheetTable />} />
                <InfoContainer title='اجزا' content={<ProductComponents />} />
            </div>
        </div>
    );
};

export default Product;