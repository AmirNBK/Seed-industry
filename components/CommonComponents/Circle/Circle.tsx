import React from 'react';

const Circle = (props: {
    color: string
    width: number
    height: number
}) => {
    return (
        <div className='rounded-full' style={{ backgroundColor: props.color, width: `${props.width}px`, height: `${props.height}px` }}>
         
        </div>
    );
};

export default Circle;