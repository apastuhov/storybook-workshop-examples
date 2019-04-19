import React, { Component } from 'react';
import './color-card.component.css';

interface IProps {
  color: string;
  click: () => void;
}

class ColorCard extends Component<IProps> {
  render() {
    return (
      <div className="color-card" onClick={this.props.click}>
        <div style={{
          background: this.props.color,
        }}></div>
        <h3>{ this.props.color.toUpperCase() }</h3>
      </div>
    );
  }
}

export default ColorCard;
