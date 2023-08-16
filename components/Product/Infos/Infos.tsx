import React from 'react';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const Infos = (props: {
    items: any
}) => {

    return (
        <div className='Infos mt-6 text-white flex flex-col items-end gap-4'>
            {props.items.map((item) => (
                <div className={`flex flex-row-reverse ${vazir.className}`} key={item.title}>
                    <p style={{ minWidth: '150px' }} className='text-right'>{item.title}</p>
                    <p style={{ minWidth: '150px' }} className='text-right font-extralight'>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Infos;
