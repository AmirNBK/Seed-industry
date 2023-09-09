import React, { useEffect, useState } from 'react';
import { TweenMax, Expo, Quint } from 'gsap';
import pic from '../../assets/Images/sliderPic.jpeg'
import pic2 from '../../assets/Images/sliderPic2.jpeg'
import pic3 from '../../assets/Images/sliderPic3.jpeg'
import Image from 'next/image';
import $ from 'jquery'


const CarouselSlider = () => {

    const jqueryCode = () => {
        var w, container, carousel, item, radius, itemLength, rY, ticker, wrapper;
        var mouseX = -(-(window.innerWidth * 0.5)) * 0.0025;
        var mouseY = 0;
        var mouseZ = 0;
        var addX = 0;
        let currentMouseX = 0;
        let prevMouseX = 0;
        let dragged = false;

        function debounce(func, timeout = 300) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, timeout);
            };
        }

        $(document).ready(init);

        function init() {
            w = $(window);
            container = $("#contentContainer");
            wrapper = $(".wrapper");
            carousel = $("#carouselContainer");
            item = $(".carouselItem");
            itemLength = $(".carouselItem").length;
            rY = 360 / itemLength;
            radius = Math.round(250 / Math.tan(Math.PI / itemLength)) * 0.6;

            // set container 3d props
            TweenMax.set(container, { perspective: 600 });
            TweenMax.set(carousel, { z: -radius });

            for (var i = 0; i < itemLength; i++) {
                var $item = item.eq(i);
                var $block = $item.find(".carouselItemInner");

                wrapper.on("mousedown", (event) => {
                    event.preventDefault();
                    dragged = true;
                });

                wrapper.on("mouseup", (event) => {
                    event.preventDefault();
                    dragged = false;
                });

                TweenMax.set($item, {
                    rotationY: rY * i,
                    z: radius,
                    transformOrigin: "50% 50% " + -radius + "px",
                });

                animateIn($item, $block);
            }

            // set mouse x and y props and looper ticker

            window.addEventListener("mousemove", onMouseMove, false);
            ticker = setInterval(looper, 1000 / 60);
        }

        function animateIn($item, $block) {
            var $nrX = 360 * getRandomInt(2);
            var $nrY = 360 * getRandomInt(2);

            var $nx = -2000 + getRandomInt(4000);
            var $ny = -2000 + getRandomInt(4000);
            var $nz = -4000 + getRandomInt(4000);

            var $s = 1.5 + getRandomInt(10) * 0.1;
            var $d = 1 - getRandomInt(8) * 0.1;

            TweenMax.set($item, { autoAlpha: 1, delay: $d });
            TweenMax.set($block, {
                z: $nz,
                rotationY: $nrY,
                rotationX: $nrX,
                x: $nx,
                y: $ny,
                autoAlpha: 0,
            });
            TweenMax.to($block, $s, {
                delay: $d,
                rotationY: 0,
                rotationX: 0,
                z: 0,
                ease: Expo.easeInOut,
            });
            TweenMax.to($block, $s - 0.5, {
                delay: $d,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Expo.easeInOut,
            });
        }

        function onMouseMove(event) {
            //   mouseY = -(-(window.innerHeight * 0.5) + event.pageY) * 0.01;
            if (dragged) {
                currentMouseX = event.clientX;
                if (currentMouseX - prevMouseX < 50 && currentMouseX - prevMouseX > -50) {
                    let Intensity = (currentMouseX - prevMouseX) * 0.2;
                    mouseX =
                        currentMouseX - prevMouseX > 0
                            ? mouseX - Intensity
                            : mouseX - Intensity;
                }

                prevMouseX = currentMouseX;
            }
            mouseZ = -radius - (Math.abs(-(window.innerHeight * 0.5)) - 200);
        }

        // loops and sets the carousel 3d properties
        function looper() {
            TweenMax.to(carousel, 1, {
                rotationY: scrollY / 20 + mouseX,
                rotationX: mouseY,
                ease: Quint.easeOut,
            });
            TweenMax.set(carousel, { z: mouseZ + 1500 });
        }

        function getRandomInt($n) {
            return Math.floor(Math.random() * $n + 1);
        }

        $(document).mouseleave(function () {
            dragged = false;
        });
    }

    useEffect(() => {
        jqueryCode()
    }, [])


    return (
        <div className="wrapper">
            <div id="contentContainer" className="trans3d">
                <section id="carouselContainer" className="trans3d">
                    <figure id="item1" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <figure id="item2" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <figure id="item3" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1518462592603-0b6bac106032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <figure id="item4" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1518462592603-0b6bac106032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <div id="item5" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </div>
                    <figure id="item6" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <figure id="item7" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <figure id="item8" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <figure id="item9" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1518462592603-0b6bac106032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <figure id="item10" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <figure id="item11" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                    <figure id="item12" className="carouselItem trans3d">
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </figure>
                </section>
            </div>
            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
            ></script>

            <script type="text/javascript" src="TweenMax.min.js"></script>
            <script
                type="text/javascript"
                src="https://raw.githubusercontent.com/JohnBlazek/codepen-resources/master/3d-carousel/js/libs.min.js"
            ></script>
            <style>

                {
                    `
                    
.wrapper {
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  background-size: cover;
  height: 100%;
  min-height: 1000px;
  font-family: "quicksandlight", Helvetica, Arial;
  color: #ffffff;
  text-shadow: -1px -1px 4px rgba(0, 0, 0, 0.35);
  filter: dropshadow(color=#000000, offx=1, offy=1);
  overflow: hidden;
}

a {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
}

a:hover {
  color: rgba(255, 255, 255, 1);
}

/* hardware accelatator className */
.trans3d {
  -webkit-transform-style: preserve-3d;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform-style: preserve-3d;
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform-style: preserve-3d;
  -ms-transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);

  /*-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility:hidden;
		backface-visibility:hidden;*/
}

#contentContainer {
  position: absolute;
  margin-left: -500px;
  margin-top: -500px;
  left: 50%;
  top: 50%;
  width: 1000px;
  height: 1000px;
}

#carouselContainer {
  position: absolute;
  margin-left: -500px;
  margin-top: -500px;
  left: 50%;
  top: 50%;
  width: 1000px;
  height: 1000px;
}

.carouselItem {
  width: 260px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -160px;
  margin-top: -90px;
  visibility: hidden;
  -webkit-user-drag: element;
}

.carouselItemInner {
  width: 260px;
  height: 200px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.75);
  color: aqua;
  font-size: 72px;
  left: 50%;
  top: 50%;
  margin-left: -160px;
  margin-top: -90px;
  text-align: center;
  padding-top: 50px;
  border-radius : 15px;
  background-position : cover;
}

.wrapper {
  position: relative;
  height: 100vh;
  width: 100vw;
  transform: rotateZ(6deg);
}

                    `
                }
            </style>
        </div>
    );
};

export default CarouselSlider;
