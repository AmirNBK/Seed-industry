import React from "react";
import { TweenLite, Power4 } from "gsap";

export default class SmoothScroll extends React.Component {
  state = {
    height: 0
  };

  ro = null;

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    
    if (typeof ResizeObserver !== 'undefined') {
      this.ro = new ResizeObserver(elements => {
        for (let elem of elements) {
          const crx = elem.contentRect;
          this.setState({
            height: crx.height
          });
        }
      });
      this.ro.observe(this.viewport);
    }

    this.setState({
      height: window.innerHeight // Set initial height when component mounts
    });
  }

  componentWillUnmount() {
    if (this.ro) {
      this.ro.disconnect();
    }
  }

  onScroll = () => {
    if (typeof window !== 'undefined') {
      TweenLite.to(this.viewport, 1, {
        y: -window.pageYOffset,
        ease: Power4.easeOut
      });
    }
  };

  render() {
    return (
      <>
        <div className="viewport" ref={ref => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div
          ref={ref => (this.fake = ref)}
          style={{
            height: this.state.height
          }}
        />
      </>
    );
  }
}
