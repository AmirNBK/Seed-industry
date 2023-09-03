import Image from 'next/image';
import React from 'react';
import map from '../../../assets/Images/map.png'
import InfoContainer from './InfoContainer/InfoContainer';
import dynamic from 'next/dynamic';
const MapLeaflet = dynamic(() => import("../../../components/Map/MapLeaflet"), {
    ssr: false
});

const Map = (props: {
    data: any
}) => {
    return (
        <div className='Map relative mt-28 w-full mb-32' style={{ height: '500px' }}>
            <MapLeaflet data={props.data} />
        </div>
    );
};

export default Map;