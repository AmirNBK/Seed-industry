import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import scroll from '../../assets/icons/scrollup.svg';
// import './ScrollButton.less';
// import { Button } from './Styles';

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);
	const [notFixed, setNotFixed] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	let className = 'scroll-button';

	useScrollPosition(({ prevPos, currPos }) => {
		setScrollY(currPos.y);
	});

	const toggleVisible = () => {
		const scrollY = document.documentElement.scrollTop;
		if (scrollY > 300) {
			setVisible(true);
			if (scrollY >= 6128) {
				setNotFixed(true);
			}
		} else if (scrollY <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<div
			className={`scroll-button ${notFixed ? 'hidden' : ''}`}
			onClick={scrollToTop}
		>
			{visible && <Image className="scroll-button__icon" src={scroll} alt='scrollUp'
			style={{width : '55px' , marginLeft : 'auto'}}
			/>}


			<style>
				{
					`
					.scroll-button {
						position: fixed;
						width: 100%;
						right: 2%;
						bottom: 50px;
						height: 20px;
						font-size: 2rem;
						z-index: 100000;
						cursor: pointer;
					  
						.hidden {
						  display: none;
						}
					  
						&__icon {
						  width: 50px;
						  height: 50px;
						}
					  }
					  
					`
				}
			</style>
		</div>
	);
};

export default ScrollButton;
