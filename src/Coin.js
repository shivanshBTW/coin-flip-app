import React, { Component } from 'react';
import './Coin.css';

export default class Coin extends Component {
  // static defaul
  render() {
    var headsSRC =
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg';
    var tailsSRC = 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg';
    return (
      <div className="Coin">
        {this.props.isHeads ? (
          <img src={headsSRC} alt="heads" />
        ) : (
          <img src={tailsSRC} alt="tails" />
        )}
      </div>
    );
  }
}
