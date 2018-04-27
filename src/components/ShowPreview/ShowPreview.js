import React, { PureComponent } from 'react';

export default class ShowPreview extends PureComponent {
  render() {
    const { series } = this.props;
    return (
      <div className="t-preview">
        {series.map(peviewImage => (
          <div key={peviewImage.id}>
            <a href="/" className="t-link" onClick={this.handleClick}>
              <h3>peviewImage.name</h3>
            </a>
            <img src={peviewImage.image.original} alt={peviewImage.name} />
            <div dangerouslySetInnerHTML={{ __html: peviewImage.summary }} />
          </div>
        ))}
      </div>
    );
  }
}
