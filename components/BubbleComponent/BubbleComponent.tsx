import React from 'react';

const BubbleComponent = () => {
    const bubbleCount = 20;
    const bubbles = [];

    for (let i = 1; i <= bubbleCount; i++) {
        bubbles.push(<div key={`bubble-${i}`} className={`bubbles bubble-${i}`}></div>);
    }

    return (
        <div className='xl:block hidden absolute w-full h-screen' style={{zIndex : '-100'}}>
            {bubbles}
        </div>
    );
};

export default BubbleComponent;
