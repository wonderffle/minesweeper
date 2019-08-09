import React, { Component } from 'react';

class Smiley extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  raisedSquare() {
    return(
      <g>
        <rect width="24" height="24" style={{fill: 'rgb(255,255,255)'}} />
        <g transform="translate(2,2)">
          <rect width="22" height="22" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        <g transform="translate(2,2)">
          <rect width="20" height="20" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(23,0)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(22,1)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(0,23)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(1,22)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(23,1)">
          <rect width="1" height="1" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        <g transform="translate(1,23)">
          <rect width="1" height="1" style={{fill: 'rgb(128,128,128)'}} />
        </g>
      </g>
    );
  }

  pressedSquare() {
    return(
      <g>
        <rect width="24" height="24" style={{fill: 'rgb(128,128,128)'}} />
        <g transform="translate(3,3)">
          <rect width="20" height="20" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(23,0)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(0,23)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
      </g>
    );
  }

  smiley() {
    return(
      <g>
        {this.raisedSquare()}
        <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1" fill="yellow" />
        <g transform="translate(9,8)">
          <rect width="2" height="2" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(13,8)">
          <rect width="2" height="2" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(10,15)">
          <rect width="4" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(9,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(8,13)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(14,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(15,13)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
      </g>
    )
  }

  pressed() {
    return(
      <g>
        {this.pressedSquare()}
        <g transform="translate(2,2)">
          {this.smiley()}
        </g>
      </g>
    );
  }

  surprised() {
    return(
      <g>
        {this.raisedSquare()}
        <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1" fill="yellow" />
        {/* eyes */}
        <defs>
          <g id="eye">
            <g transform="translate(9,9)">
              <rect width="3" height="1" style={{fill: 'rgb(0,0,0)'}} />
            </g>
            <g transform="translate(10,8)">
              <rect width="1" height="3" style={{fill: 'rgb(0,0,0)'}} />
            </g>
            <g transform="translate(9,8)">
              <rect width="1" height="1" style={{fill: 'rgb(128,128,0)'}} />
            </g>
            <g transform="translate(11,8)">
              <rect width="1" height="1" style={{fill: 'rgb(128,128,0)'}} />
            </g>
            <g transform="translate(9,10)">
              <rect width="1" height="1" style={{fill: 'rgb(128,128,0)'}} />
            </g>
            <g transform="translate(11,10)">
              <rect width="1" height="1" style={{fill: 'rgb(128,128,0)'}} />
            </g>
          </g>
        </defs>
        <use href="#eye" x="-1" y="0" />
        <use href="#eye" x="4" y="0" />
        {/* mouth */}
        <g transform="translate(11,13)">
          <rect width="2" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(10,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(13,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(11,16)">
          <rect width="2" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(10,15)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(13,15)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
      </g>
    )
  }

  won() {
    return(
      <g>
        {this.raisedSquare()}
        <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1" fill="yellow" />
        <g transform="translate(9,8)">
          <rect width="4" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(7,8)">
          <rect width="4" height="3" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(8,11)">
          <rect width="2" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(7,11)">
          <rect width="1" height="1" style={{fill: 'rgb(128,128,0)'}} />
        </g>
        <g transform="translate(6,8)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(5,9)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(4,10)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(13,8)">
          <rect width="4" height="3" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(14,11)">
          <rect width="2" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(16,11)">
          <rect width="1" height="1" style={{fill: 'rgb(128,128,0)'}} />
        </g>
        <g transform="translate(17,8)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(18,9)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(19,10)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(10,15)">
          <rect width="4" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(9,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(14,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
      </g>
    )
  }

  lost() {
    return(
      <g>
        {this.raisedSquare()}
        <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1" fill="yellow" />
        {/* eyes */}
        <defs>
          <g id="eye">
            <g transform="translate(9,9)">
              <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
            </g>
            <g transform="translate(10,10)">
              <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
            </g>
            <g transform="translate(11,11)">
              <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
            </g>
            <g transform="translate(11,9)">
              <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
            </g>
            <g transform="translate(9,11)">
              <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
            </g>
          </g>
        </defs>
        <use href="#eye" x="-1" y="0" />
        <use href="#eye" x="4" y="0" />
        {/* mouth */}
        <g transform="translate(10,14)">
          <rect width="4" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(9,15)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(8,16)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(14,15)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(15,16)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
      </g>
    )
  }

  press() {
    this.setState({type: 'pressed'});
  }

  release() {
    this.setState({type: 'smiley'});
  }

  rowClick() {
    if (this.props.gameOver) return;

    this.setState({type: 'surprised'});
  }

  render() {
		let type;

		if (this.state.type === 'pressed') {
			type = 'pressed';
		} else if (this.props.hasWon) {
			type = 'won';
		} else {
			type = (this.props.lost ? 'lost' : null) || this.state.type || 'smiley';
		}

    return(
      <svg width="24" height="24">
        {this[type]()}
        <rect
          className="button" x="0" y="0" width="24" height="24"
          onMouseDown={() => this.press()}
          onMouseUp={() => this.release()}
          onMouseOut={() => this.release()}
          onClick={() => this.props.reset()}
        />
      </svg>
    );
  }
}

export default Smiley;
