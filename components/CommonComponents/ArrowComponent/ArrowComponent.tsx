import Image from 'next/image';
import React from 'react';
import arrow from '../../../assets/Icons/arrow-down.svg'
import styles from './ArrowComponent.module.css'

const ArrowComponent = () => {
    return (
        <div className={`ArrowComponent rounded-full w-fit w-64 h-64 relative ${styles.ArrowContainer}`}
            style={{transform : 'translateY(-180px)' , marginLeft : '-50px'}}>
            <div className='absolute w-64 h-64 left-1/2	top-1/2'
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <div className='rounded-full absolute bg-transparent w-full h-full'
                    style={{ border: '1px solid #fff' }}>

                </div>
            </div>
            <Image unoptimized alt='arrow' src={arrow} className='absolute left-1/2 top-1/2'
                style={{ transform: 'translate(-50%, -50%)' }} />
        </div>
    );
};

export default ArrowComponent;