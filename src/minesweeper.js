import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import Game from './game'

class Minesweeper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      difficulty: 'intermediate'
    };
  }

  setDifficulty(difficulty) {
    this.setState({difficulty: difficulty});
  }

  render() {
    const difficulty = this.state.difficulty.charAt(0).toUpperCase() + this.state.difficulty.slice(1);

    return (
      <div>
        <Navbar fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">Minesweeper</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={1} id="new-game-dropdown" title={difficulty}>
                <MenuItem eventKey={1.1}  onClick={() => this.setDifficulty('beginner')}>Beginner</MenuItem>
                <MenuItem eventKey={1.2}  onClick={() => this.setDifficulty('intermediate')}>Intermediate</MenuItem>
                <MenuItem eventKey={1.3}  onClick={() => this.setDifficulty('expert')}>Expert</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Game difficulty={this.state.difficulty} />
        <footer className="footer container-fluid">
          <div className="row">
            <div className="col-lg-6">Created by Mike Bradford</div>
            <div className="col-lg-6 text-right"><a href="https://github.com/47primes/minesweeper">View Source Code on Github</a></div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Minesweeper;
