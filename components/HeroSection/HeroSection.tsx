import React, { useState, useRef, useEffect } from 'react';

interface HeroSectionImageProps {
    handleMouseEnter?: (e: React.MouseEvent) => void;
    handleMouseMove?: (e: React.MouseEvent) => void;
    handleMouseLeave?: (e: React.MouseEvent) => void;
    options?: {
        reverse?: boolean;
        max?: number;
        perspective?: number;
        easing?: string;
        scale?: string;
        speed?: string;
        transition?: boolean;
        axis?: string | null;
        reset?: boolean;
    };
    style?: React.CSSProperties;
    children?: React.ReactNode;
}


const HeroSectionImage: React.FC<HeroSectionImageProps> = ({
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
    options,
    children,
    style,
}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    const [left, setLeft] = useState<number | null>(null);
    const [top, setTop] = useState<number | null>(null);
    const [styleState, setStyleState] = useState<React.CSSProperties>({
        transform: '',
        transition: '',
    });

    const defaultSettings = {
        reverse: true,
        max:15,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        scale: '1',
        speed: '5000',
        transition: true,
        axis: true,
        reset: true,
    };

    const settings = {
        ...defaultSettings,
        ...options,
    };

    const reverse = settings.reverse ? -1 : 1;
    let updateCall: number | null = null;
    let event: React.MouseEvent;

    const getValues = (e: React.MouseEvent) => {
        const x = (e.clientX - (left || 0)) / (width || 1);
        const y = (e.clientY - (top || 0)) / (height || 1);
        const _x = Math.min(Math.max(x, 0), 1);
        const _y = Math.min(Math.max(y, 0), 1);
        const tiltX = (reverse * (settings.max / 2 - _x * settings.max)).toFixed(2);
        const tiltY = (reverse * (_y * settings.max - settings.max / 2)).toFixed(2);
        const percentageX = _x * 100;
        const percentageY = _y * 100;
        return {
            tiltX,
            tiltY,
            percentageX,
            percentageY,
        };
        
    };
    

    const setTransition = () => {
        clearTimeout(updateCall || undefined);
        setStyleState((prevState) => ({
            ...prevState,
            transition: `${settings.speed}ms ${settings.easing}`,
        }));
        updateCall = window.setTimeout(() => {
            setStyleState((prevState) => ({
                ...prevState,
                transition: '',
            }));
        }, Number(settings.speed));
    };

    const reset = () => {
        window.requestAnimationFrame(() => {
            setStyleState((prevState) => ({
                ...prevState,
                transform: `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            }));
        });
    };

    const update = (e: React.MouseEvent) => {
        const values = getValues(e);
        setStyleState((prevState) => ({
            ...prevState,
            transform: `perspective(${settings.perspective}px) rotateX(${settings.axis === 'x' ? 0 : values.tiltY
                }deg) rotateY(${settings.axis === 'y' ? 0 : values.tiltX}deg) scale3d(${settings.scale
                }, ${settings.scale}, ${settings.scale})`,
        }));
        updateCall = null;
    };

    const handleMouseEnterHandler = (e: React.MouseEvent) => {
        updateElementPosition();
        setTransition();
        if (typeof handleMouseEnter === 'function') {
            handleMouseEnter(e);
        }
    };

    const handleMouseMoveHandler = (e: React.MouseEvent) => {
        e.persist();
        if (updateCall !== null) {
            window.cancelAnimationFrame(updateCall);
        }
        event = e;
        updateCall = window.requestAnimationFrame(() => update(e));
        if (typeof handleMouseMove === 'function') {
            handleMouseMove(e);
        }
    };

    const handleMouseLeaveHandler = (e: React.MouseEvent) => {
        setTransition();
        if (settings.reset) {
            reset();
        }
        if (typeof handleMouseLeave === 'function') {
            handleMouseLeave(e);
        }
    };

    const updateElementPosition = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            setWidth(elementRef.current.offsetWidth);
            setHeight(elementRef.current.offsetHeight);
            setLeft(rect.left);
            setTop(rect.top);
        }
    };

    useEffect(() => {
        updateElementPosition();
        return () => {
            clearTimeout(updateCall || undefined);
            window.cancelAnimationFrame(updateCall || undefined);
        };
    }, []);

    const mergedStyle: React.CSSProperties = {
        ...style,
        ...styleState,
        height: '70vh'
    };

    return (
        <div
            ref={elementRef}
            style={mergedStyle}
            className='w-screen'
            onMouseEnter={handleMouseEnterHandler}
            onMouseMove={handleMouseMoveHandler}
            onMouseLeave={handleMouseLeaveHandler}
        >
            {children}
        </div>
    );
};

export default HeroSectionImage;
