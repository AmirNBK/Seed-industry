import React from 'react';
import localFont from 'next/font/local'
import { Vazirmatn } from 'next/font/google';
import ContactUsInput from './ContactUsInput/ContactUsInput';
import ContactUsTextArea from './ContactUsTextArea/ContactUsTextArea';
import Map from './Map/Map';
import Footer from '../Footer/Footer';
const vazir = Vazirmatn({ subsets: ['latin'] });
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })


const ContactUs = () => {
    return (
        <div className='ContactUs w-full'>
            <h1 className={`text-5xl md:text-8xl leading-normal ${myFont.className} text-center text-white mt-20`}
             data-aos-duration="1500" data-aos-once={true} data-aos="fade-down"
            >
                با ما در تماس باشید
            </h1>
            <p 
            data-aos-duration="1500" data-aos-once={true} data-aos="fade-up"
            className={`${vazir.className} text-white text-base md:text-lg mt-12 text-center`} style={{ direction: 'rtl' }}>
                با ما برای بهترین و هوشمندانه ترین مشاوره حساب کنید و با متخصصان ما در ارتباط باشید.
            </p>

            <div className='ContactUs__inputs mt-20 flex flex-col md:flex-row-reverse gap-20 w-8/12 mx-auto'>
                <div className='ContactUs__inputs__rightSide flex flex-col gap-20 flex-1'>
                    <ContactUsInput placeholder='نام و نام خانوادگی' />
                    <ContactUsInput placeholder='شماره تماس' />
                    <ContactUsInput placeholder='آدرس ایمیل' />
                </div>
                <div className='ContactUs__inputs__leftSide w-full' style={{ flex: '1.6' }}>
                    <ContactUsTextArea placeholder='پیام شما' />
                </div>
            </div>
            <div className='my-56'>
            <Map />
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;