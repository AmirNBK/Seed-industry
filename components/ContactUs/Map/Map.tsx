import Image from 'next/image';
import React from 'react';
import map from '../../../assets/Images/map.png'
import InfoContainer from './InfoContainer/InfoContainer';

const Map = () => {
    return (
        <div className='Map relative mt-28 w-full mb-32'>
            <Image src={map} alt='map' className='w-full object-cover' unoptimized />
            <InfoContainer address='سعادت آباد ، علامه جنوبی ، چهارراه مسجد ، چهلم غربی' telephone='021884213 - 02188692319'
                emailAddress='test@gmail.com'
            />
        </div>
    );
};

export default Map;