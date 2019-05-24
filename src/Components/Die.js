import React, { Component } from 'react'
import './Die.css';

class Die extends Component {
  render(){
    return (
      <div>
        <i className={`Die fas fa-dice-${this.props.face} ${ this.props.isRolling && 'shake-slow' }`} />
      </div>
    )
  }
}

export default Die;