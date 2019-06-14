import React, { Component } from 'react';
import Coin from './Coin';

export default class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      hCount: 0,
      tCount: 0,
      isHeads: true
    };
    this.randGen = this.randGen.bind(this);
  }
  randGen() {
    let total = this.state.total;
    let hCount = this.state.hCount;
    let tCount = this.state.tCount;
    let rand = Math.floor(Math.random() * 2);
    if (rand) {
      total++;
      hCount++;
    } else {
      total++;
      tCount++;
    }
    this.setState({ ...this.state, isHeads: rand, total: total, hCount: hCount, tCount: tCount });
  }
  render() {
    return (
      <div>
        <Coin isHeads={this.state.isHeads} />
        <button onClick={this.randGen}>FLIP COIN!!!</button>
        <p>
          Out of {this.state.total} flips, there have been {this.state.hCount} heads and{' '}
          {this.state.tCount} tails
        </p>
      </div>
    );
  }
}
