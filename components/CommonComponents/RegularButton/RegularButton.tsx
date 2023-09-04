import React from 'react';
import { Vazirmatn } from 'next/font/google';
import Link from 'next/link';
const vazir = Vazirmatn({ subsets: ['latin'] });

const RegularButton = (props: {
    text: string
    onClick?: () => void
    link?: any
}) => {
    const text = props.text
    const onClick = props.onClick
    const link = props.link

    return (
        <div className="row middle-on-small center-on-small h-full">
            <div className="column small-12 medium-6 large-4">
                <button onClick={onClick} className={`${vazir.className} c-button c-button--gooey`}
                    style={{ borderRadius: '30px', background: '#D1E8E4' }}
                >
                    {link ?
                        <Link href={`${link ? link : '/'}`} className={`${vazir.className} relative text-xs md:text-base`} style={{ zIndex: '100' }}>
                            {text}
                        </Link>
                        :
                        <p className={`${vazir.className} relative text-xs md:text-base`} style={{ zIndex: '100' }}>
                            {text}
                        </p>
                    }
                    <div className="c-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default RegularButton;