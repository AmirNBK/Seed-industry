import React, { useState } from 'react';
import localFont from 'next/font/local'
import ValuesContainer from './ValuesContainer/ValuesContainer';
import ResearchIcon from '@/assets/Icons/magnifier';
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })

const Values = () => {

    const valuesData = [
        {
            title: 'تحقیق و توسعه',
            description: 'برنامه‌های تحقیقاتی ما متمرکز بر ارتقاء بهره‌وری بذر، بهینه‌سازی روش‌های تولید بذر، افزایش مقاومت در برابر آفات و بیماری‌ها، و بهبود ویژگی‌های کیفی و مشخصات فیزیولوژیکی بذرها می‌باشند. تیم پژوهشی ما از اساتید و متخصصان مجرب در زمینه علوم کشاورزی و بذر شامل بیولوژیست‌ها، بیوشیمیست‌ها و متخصصان ژنتیک است. این تیم متعهد به اجرای پروژه‌های تحقیقاتی متنوع برای بهبود فرآورده‌های بذری و پیشرفت در علم بذر است.',
            topPosition: '-26%'
        },
        {
            title: 'همیشه نوآوری',
            description: 'برنامه‌های تحقیقاتی ما متمرکز بر ارتقاء بهره‌وری بذر، بهینه‌سازی روش‌های تولید بذر، افزایش مقاومت در برابر آفات و بیماری‌ها، و بهبود ویژگی‌های کیفی و مشخصات فیزیولوژیکی بذرها می‌باشند. تیم پژوهشی ما از اساتید و متخصصان مجرب در زمینه علوم کشاورزی و بذر شامل بیولوژیست‌ها، بیوشیمیست‌ها و متخصصان ژنتیک است. این تیم متعهد به اجرای پروژه‌های تحقیقاتی متنوع برای بهبود فرآورده‌های بذری و پیشرفت در علم بذر است.',
            topPosition: '-13%',
            leftPosition: '-30px'
        },
        {
            title: 'تحقیق و توسعه',
            description: 'برنامه‌های تحقیقاتی ما متمرکز بر ارتقاء بهره‌وری بذر، بهینه‌سازی روش‌های تولید بذر، افزایش مقاومت در برابر آفات و بیماری‌ها، و بهبود ویژگی‌های کیفی و مشخصات فیزیولوژیکی بذرها می‌باشند. تیم پژوهشی ما از اساتید و متخصصان مجرب در زمینه علوم کشاورزی و بذر شامل بیولوژیست‌ها، بیوشیمیست‌ها و متخصصان ژنتیک است. این تیم متعهد به اجرای پروژه‌های تحقیقاتی متنوع برای بهبود فرآورده‌های بذری و پیشرفت در علم بذر است.',
            leftPosition: '-60px'
        }
        // Add more data as needed
    ];

    return (
        <div className='Values  w-full mb-32 mt-16'
        >
            <h2 className={`${myFont.className} Blogs__title text-white text-7xl w-max ml-auto mr-12`}>
                ارزش های ما
            </h2>
            <div className='relative left-1/2'
                style={{ paddingBottom: "600px", transform: 'translateX(-30%)', top: '200px' }}>
                {valuesData.map((value, index) => (
                    <ValuesContainer
                        key={index}
                        bgColor='#324225'
                        icon={<ResearchIcon color={'#aafc75'} />}
                        title={value.title}
                        description={value.description}
                        topPosition={value.topPosition}
                        leftPosition={value.leftPosition}
                    />
                ))}
            </div>
        </div>
    );
};

export default Values;