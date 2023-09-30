import React from 'react';

const ColoredSVG = ({ color, width, onClick, rotate, alternativeClassnames }) => {
    return (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={`${width} ${rotate} duration-500 ${alternativeClassnames} cursor-pointer`}>
            <title />
            <g data-name="1" id="_1">
                <path
                    d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z"
                    fill={color}
                />
            </g>
        </svg>
    );
};

export default ColoredSVG;
