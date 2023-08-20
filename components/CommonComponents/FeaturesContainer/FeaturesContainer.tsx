import React from 'react';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['latin'] });

const FeaturesContainer = (props: {
    item: string
    color: string
}) => {
    return (
        <div className={`FeaturesContainer text-xs md:text-sm ${vazir.className} justify-evenly font-light px-4 py-2 w-fit rounded-xl`}
            style={{ backgroundColor: `${props.color}` }}
        >
            {props.item}
        </div>
    );
};

export default FeaturesContainer;