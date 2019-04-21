import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      outcome : ''
    }
  }

  render() {
    let rock = 1;
    let paper = 2;
    let scissors = 3;

    return (
      <div className="tc">
        <div>
          <button onClick={() => this.moveSelect(rock)}><img src="rock.png" alt={"Rock"} height="100" /></button>
          <button onClick={() => this.moveSelect(paper)}><img src="paper.png" alt={"Paper"} height="100" /></button>
          <button onClick={() => this.moveSelect(scissors)}><img src="scissors.png" alt={"Scissors"} height="100" /></button>
        </div>
        <div>
          <h1>{this.state.outcome}</h1>
        </div>
      </div>
    );
  }

  moveSelect = (moveChoice) => {
    let computerChoice = this.computerSelect();
    this.determineWinner(moveChoice, computerChoice);
    console.log(moveChoice + ', ' + computerChoice);
  }
  
  computerSelect = () => {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
  }

  determineWinner = (moveChoice, computerChoice) => {
    if (moveChoice === computerChoice)
      this.setState({outcome : "You have tied. Pick again"}) 
    else if (moveChoice < computerChoice && computerChoice !==3)
    this.setState({outcome : "You lose, idiot"})
    else {
      this.setState({outcome : "You win, genius"})
    }
  }
}

export default App;
