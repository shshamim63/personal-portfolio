import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
    return <button title='Back to top' className='scroll' 
            onClick={ () => { this.scrollToTop(); }}>
            <span className='arrow-up'>
              <i className="fa fa-arrow-up"></i>
            </span>
            </button>;
  }
}

export default ScrollButton;