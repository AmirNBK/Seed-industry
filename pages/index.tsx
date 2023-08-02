import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import dynamic from 'next/dynamic'
import pic from '../assets/Images/heroSeed.png'
import HeroSectionImage from '@/components/HeroSectionImage/HeroSectionImage';
import ArrowComponent from '@/components/CommonComponents/ArrowComponent/ArrowComponent';


const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 overflow-hidden ${inter.className}`}
    >
      <PrimeReactProvider>
        <AnimatedCursor
          innerSize={17}
          outerSize={250}
          color='255, 255, 255'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.3}
          outerStyle={{
            backgroundColor: 'rgba(136, 219, 68, 0.90)',
            filter: 'blur(97.5px)',
            zIndex: '-1px'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        <Header />
        <div className='relative mt-20'>
          <HeroSectionImage
            options={{}}
            style={{
              background: `url(${pic}) no-repeat fixed center`,
              backgroundSize: 'fit',
            }}
          >
            <HeroSectionImage>
              <Image src={pic} alt="" className='mx-auto my-auto' unoptimized />
            </HeroSectionImage>
          </HeroSectionImage>
          <ArrowComponent />
        </div>
      </PrimeReactProvider>
    </main>
  )
}
