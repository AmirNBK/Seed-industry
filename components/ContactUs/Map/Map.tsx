import Image from 'next/image';
import React from 'react';
import map from '../../../assets/Images/map.png'
import InfoContainer from './InfoContainer/InfoContainer';

const Map = (props: {
    data: any
}) => {

    return (
        <div className='Map relative mt-28 w-full mb-32'>
            <Image src={map} alt='map' className='w-full object-cover' unoptimized
                style={{ minHeight: '850px' }}
            />
            <InfoContainer address={props.data.location} telephone={props.data.phone}
                emailAddress={props.data.email}
            />
        </div>
    );
};

export default Map;