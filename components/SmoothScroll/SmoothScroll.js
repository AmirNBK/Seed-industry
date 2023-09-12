import React from "react";
import gsap from 'gsap';
import { TweenLite, Power4 } from "gsap";

gsap.registerPlugin()

export default class SmoothScroll extends React.Component {
  constructor(props) {
    super(props);
    this.maxYTranslation = props.maxYTranslation;
  }

  state = {
    height: window.innerHeight
  };

  ro = new ResizeObserver(elements => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      // this.setState({
      //   height: crx.height
      // });
    }
  });

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.ro.observe(this.viewport);
  }

  onScroll = () => {
    const scrollY = window.pageYOffset;

    // Limit the translation to the maximum value
    const limitedTranslationY = Math.min(0, Math.max(this.maxYTranslation, -scrollY));

    gsap.to(this.viewport, { duration: 2, y: limitedTranslationY || window.pageYOffset, ease: Power4.easeOut });
  }

  render() {
    return (
      <>
        <div className="" ref={ref => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div ref={ref => (this.fake = ref)} />
      </>
    );
  }
}
