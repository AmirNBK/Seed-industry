import React from 'react';
import arrow from '../../../assets/Icons/arrow.svg'
import arrowBlack from '../../../assets/Icons/arrow-black.svg'
import { Vazirmatn } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
const vazir = Vazirmatn({ subsets: ['latin'] });

const RegularButton = (props: {
  text: string
  onClick?: () => void
  link?: any
  position?: string
  width?: number
}) => {
  const text = props.text
  const onClick = props.onClick
  const link = props.link
  const position = props.position
  const width = props.width

  return (
    <>
      <Link
        className={`${position === 'right' ? 'ml-auto' : position === 'center' ? 'mx-auto' : ''}
         btn-epic bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-20`} href="" target="_blank"
        style={{ maxWidth: `${width}px` }}
      >
        <div className='div'><span>{text}
          <div className='relative'
            style={{ transform: ' translate(10px,-20px)' }}
          >
            <Image src={arrowBlack} alt='arrow'
              style={{ transform: 'rotate(90deg)', width: '15px' }}
            />
            <div className='rounded-full bg-white absolute'
              style={{ width: '20px', height: '20px', left: '-3px', top: '-3px', opacity: '0.4' }}
            >

            </div>
            <div className='rounded-full bg-white absolute animate-pulse-fast scale-up'
              style={{ width: '35px', height: '35px', left: '-10.5px', top: '-10.5px', opacity: '0.5' }}
            >

            </div>
          </div>
        </span><span>{text}
            <div className='relative'
              style={{ transform: ' translate(10px,-20px)' }}
            >
              <Image src={arrow} alt='arrow'
                style={{ transform: 'rotate(90deg)', width: '15px' }}
              />
              <div className='rounded-full bg-white absolute'
                style={{ width: '20px', height: '20px', left: '-3px', top: '-3px', opacity: '0.15' }}
              >

              </div>
              <div className='rounded-full bg-white absolute'
                style={{ width: '35px', height: '35px', left: '-10.5px', top: '-10.5px', opacity: '0.1' }}
              >

              </div>
            </div>
          </span></div></Link>


      <style>
        {
          `
                    .btn-epic {
  position: relative;
  display : grid;
  width: 100%;
  border-radius : 999px;
  height: 65px;
  transform: translate3d(0px, 0%, 0px);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  transition-delay: 0.6s;
  overflow: hidden;
}
.btn-epic:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ABFC75;
  border-radius: 50% 50% 0 0;
  transform: translateY(100%) scaleY(0.5);
  transition: all 0.6s ease;
}
.btn-epic:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
  transform: translateY(0) scaleY(1);
  transition: all 0.6s ease;
}
.btn-epic .div {
    transform: translate(20px,0px);
  position: relative;
  top: 16px;
  width: 100%;
  height: 70px;
  text-transform: uppercase;
  overflow: hidden;
}
.btn-epic span {
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  text-align: center;
  transition: transform 0.5s ease;
}
.btn-epic span:first-child {
  color: #1e0f21;
  transform: translateY(70px);
}
.btn-epic span:last-child {
  color: #fff;
  transform: translateY(3px);
}
.btn-epic:hover {
  transition: background 0.2s linear;
  transition-delay: 0.6s;
}
.btn-epic:hover:after {
  border-radius: 0 0 50% 50%;
  transform: translateY(-100%) scaleY(0.5);
  transition-delay: 0;
}
.btn-epic:hover:before {
  border-radius: 0;
  transform: translateY(0) scaleY(1);
  transition-delay: 0;
}
.btn-epic:hover span:first-child {
  transform: translate(2px,5px);
}
.btn-epic:hover span:last-child {
  transform: translateY(-24px);
}

                    `
        }
      </style>
    </>
  );
};

export default RegularButton;