import React, { Component } from 'react';
import Cell from './cell';
import Header from './header';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.setupGame()};
  }

  setupGame() {
    let rows;
    let cols;
    let flags;
    let mines = 0;
    let cells = [];

    switch(this.props.difficulty) {
      case 'intermediate':
        rows = cols = 16;
        flags = 40;
        break;
      case 'expert':
        rows = 16;
        cols = 30;
        flags = 99;
        break;
      default:
        rows = cols = 9;
        flags = 10;
    }

    for(let row=0; row<rows; row++) {
      cells[row] = [];
      for(let col=0; col<cols; col++) {
        cells[row][col] = {
					covered: true,
					armed: false,
					flagged: false,
					questioned: false,
					mines: 0,
					wrong: false,
				};
      }
    }

    while (mines < flags) {
      let row = Math.round(Math.random()*(rows - 1));
      let col = Math.round(Math.random()*(cols - 1));
			if (!cells[row][col].armed) {
				cells[row][col].armed = true;
				mines++;
			};
    }

    return {
      rows: rows,
      cols: cols,
			coveredCells: rows*cols,
      flags: flags,
      mines: mines,
      cells: cells,
      lost: false,
      started: false,
      reset: (() => this.reset()),
			header: React.createRef(),
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.difficulty !== prevProps.difficulty) {
      this.reset();
    }
  }

  start() {
    if (this.state.started) return;

    this.state.header.current.timer.current.start();
    this.setState({started: true});
  }

	stop() {
    this.state.header.current.timer.current.stop();
	}

  reset() {
    this.setState({...this.setupGame()});
    this.state.header.current.timer.current.stop();
    this.state.header.current.timer.current.reset();
  }

	pressCell(row, col) {
		if (this.gameOver()) return;

    this.touchEvent = setInterval(() => this.setFlag(row, col), 1000);

    this.state.header.current.smiley.current.rowClick();
	}

	releaseCell() {
		if (this.gameOver()) return;

    clearInterval(this.touchEvent);

    this.state.header.current.smiley.current.release();
	}

  clickCell(row, col, doSetState=true) {
		if (this.gameOver() || !this.state.cells[row][col].covered) return;

		if (doSetState) {
			this.start();
			this.flags = this.state.flags;
			this.cells = this.state.cells.slice();
			this.coveredCells = this.state.coveredCells;
		}

    if (this.cells[row][col].questioned || this.cells[row][col].flagged) return;

    if (this.cells[row][col].armed) {
      this.stop();
      this.cells[row][col].wrong = true;
      this.setState({lost: true});
      return;
    }

    this.coveredCells--;
    this.cells[row][col].covered = false;
    this.cells[row][col].flagged = false;
    this.cells[row][col].questioned = false;

    var rowStart = row > 0 ? row - 1 : 0;
    var rowEnd = row < this.state.rows - 1 ? row + 1 : this.state.rows - 1;
    var colStart = col > 0 ? col - 1 : 0;
    var colEnd = col < this.state.cols - 1 ? col + 1 : this.state.cols - 1;

    //Count number of armed adjacent cells
    for (let r=rowStart; r<=rowEnd; r++) {
      for (let c=colStart; c<=colEnd; c++) {
        if (this.cells[r][c].armed) {
          this.cells[row][col].mines++;
        }
      }
    }

    //If no adjacent cells are armed, click all uncovered adjacent cells
    if (this.cells[row][col].mines === 0) {
      for (let r=rowStart; r<=rowEnd; r++) {
        for (let c=colStart; c<=colEnd; c++) {
          if (this.cells[r][c].covered) {
            this.clickCell(r,c,false);
          }
        }
      }
    }

		if (doSetState) {
			this.setState({
				cells: this.cells,
				flags: this.flags,
				coveredcells: this.coveredcells,
			}, () => { if (this.gameOver()) this.stop() });
		}
  }

  setFlag(row, col, event) {
    if (event) event.preventDefault();
		if (this.gameOver() || !this.state.cells[row][col].covered) return;

    let flags = this.state.flags;
    let cells = this.state.cells.slice();

    if (cells[row][col].flagged) {
      cells[row][col].questioned = true;
      cells[row][col].flagged = false;
      flags++;
    } else if (cells[row][col].questioned) {
      cells[row][col].questioned = false;
    } else {
      cells[row][col].flagged = true;
      flags--;
    }

    this.setState({
      cells: cells,
      flags: flags,
    }, () => { if (this.gameOver()) this.stop() });
  }

	hasWon() {
		return this.flags === 0 && this.state.coveredCells === this.state.mines;
	}

	gameOver() {
		return this.hasWon() || this.state.lost;
	}

  render() {
    let rows = [];

    for(let row=0; row<this.state.rows; row++) {
      let cols = [];
      for(let col=0; col<this.state.cols; col++) {
        cols.push(
					<Cell
						key={row+'.'+col}
						{...{row: row, col: col, gameOver: this.gameOver(), hasWon: this.hasWon(), ...this.state}}
						onClick={() => this.clickCell(row, col)}
						onContextMenu={(event) => this.setFlag(row, col, event)}
						onMouseDown={() => this.pressCell(row, col)}
						onMouseUp={() => this.releaseCell()}
						onMouseOut={() => this.releaseCell()}
						onTouchStart={() => this.pressCell(row, col)}
						onTouchEnd={() => this.releaseCell()}
					/>
				);
      }
      rows.push(<div key={row} className="board-row">{cols}</div>);
    }

    return (
      <div className="text-center">
        <div className="game">
          <div>
						<Header
							ref={this.state.header}
							{...{gameOver: this.gameOver(), hasWon: this.hasWon(), ...this.state}}
						/>
            {rows}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
