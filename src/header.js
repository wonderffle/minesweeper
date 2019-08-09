import React, { Component } from 'react';
import Smiley from './smiley';
import Timer from './timer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.timer = React.createRef();
    this.smiley = React.createRef();
  }

  render() {
    return(
      <div className="board-header">
        <div className="flag-count">{this.props.flags}</div>
        <Smiley ref={this.smiley} {...this.props} />
        <Timer ref={this.timer} {...this.props} />
      </div>
    );
  }
}

export default Header;
