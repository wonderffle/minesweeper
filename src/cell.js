import React, { Component } from 'react';
import Square from './square';

class Cell extends Component {
  render() {
    return(
      <div
        className="cell"
        onClick={(row, col, event) => this.props.onClick(row, col, event)}
        onContextMenu={(row, col, event) => this.props.onClick(row, col, event)}
        onMouseDown={() => this.props.onMouseDown()}
        onMouseUp={() => this.props.onMouseUp()}
        onMouseOut={() => this.props.onMouseOut()}
      >
        <Square {...this.props} />
      </div>
    );
  }
}

export default Cell;
