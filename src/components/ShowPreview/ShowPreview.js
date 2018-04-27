import React, { Component } from 'react';

export default class ShowPreview extends Component {
  render() {
    return (
      <div className="t-preview">
        <div>
          <a href="/" className="t-link">
            <h3>Наименование сериала</h3>
          </a>
          <img src="/" alt="..." />
        </div>
      </div>
    );
  }
}
