import React, { Component } from 'react';
import './Farm.css';

export class Farm extends Component {
  render() {
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled>Отправить урожай клиенту</button>
      </div>
    );
  }
}

export default Farm;
