import React from 'react';
import { Vazirmatn } from 'next/font/google';
import Link from 'next/link';
const vazir = Vazirmatn({ subsets: ['latin'] });

const Navigation = (props: {
    items: any
}) => {
    
    return (
        <div className={`Navigation flex flex-row-reverse gap-8 rounded-2xl p-6 font-light ${vazir.className}`}
            style={{ backgroundColor: '#EBDAB2' }}>
            {props.items.map((item) => (
                <Link href={`${item.link}`} key={item.label}>
                    <p>{item.label}</p>
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
