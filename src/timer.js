import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  addSecond() {
    if (this.state.seconds === 59) {
      this.setState({seconds: 0}, () => this.addMinute());
    } else {
      this.setState({seconds: this.state.seconds + 1});
    }
  }

  addMinute() {
    if (this.state.minutes === 59) {
      this.setState({minutes: 0}, () => this.addHour());
    } else {
      this.setState({minutes: this.state.minutes+ 1});
    }
  }

  addHour() {
    this.setState({hours: this.state.hours + 1});
  }

  start() {
    this.interval = setInterval(
      () => this.addSecond(),
      1000
    );
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.setState({seconds: 0, minutes: 0, hours: 0});
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes< 10) {
      minutes = "0" + minutes;
    }
    return(
      <div className="timer">
        {this.state.hours > 0 && this.state.hours + ':'}{minutes}:{seconds}
      </div>
    );
  }
}

export default Timer;
