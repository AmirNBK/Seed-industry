import React from 'react';
import localFont from 'next/font/local'
import { Vazirmatn } from 'next/font/google';
import ContactUsInput from './ContactUsInput/ContactUsInput';
import ContactUsTextArea from './ContactUsTextArea/ContactUsTextArea';
import Map from './Map/Map';
import Footer from '../Footer/Footer';
import RegularButton from '../CommonComponents/RegularButton/RegularButton';
import BubbleComponent from '../BubbleComponent/BubbleComponent';
const vazir = Vazirmatn({ subsets: ['latin'] });
const myFont = localFont({ src: '../../assets/Fonts/mj.ttf' })


const ContactUs = (props: {
    data: any
}) => {

    return (
        <div className='ContactUs w-full'>
            <BubbleComponent />
            <h1 className={`text-5xl md:text-8xl leading-normal ${myFont.className} text-center text-white mt-10 md:mt-20`}
                data-aos-duration="1500" data-aos-once={true} data-aos="fade-down"
            >
                {props.data.title}
            </h1>
            <p
                data-aos-duration="1500" data-aos-once={true} data-aos="fade-up"
                className={`${vazir.className} text-white text-base md:text-lg mt-12 text-center`} style={{ direction: 'rtl' }}>
                {props.data.description}
            </p>

            <div className='ContactUs__inputs mt-20 flex flex-col md:flex-row-reverse gap-20 w-8/12 mx-auto'>
                <BubbleComponent />
                <div className='ContactUs__inputs__rightSide flex flex-col gap-20 flex-1'>
                    <ContactUsInput placeholder='نام و نام خانوادگی' />
                    <ContactUsInput placeholder='شماره تماس' />
                    <ContactUsInput placeholder='آدرس ایمیل' />
                </div>
                <div className='ContactUs__inputs__leftSide w-full' style={{ flex: '1.6' }}>
                    <ContactUsTextArea placeholder='پیام شما' />
                </div>
            </div>
            <div className='text-center mt-32'>
                <RegularButton text='ارسال' />
            </div>
            <div className='my-56'>
                <Map data={props.data.contactInfos[0]} />
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;