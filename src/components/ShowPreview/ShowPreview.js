import React, { PureComponent } from 'react';

import { getShowRequest } from 'actions/show';
class ShowPreview extends PureComponent {
  handleClick = () => {
    getShowRequest(12922); //this.props.id
  };

  render() {
    const { name, summary, image, id } = this.props;
    return (
      <div className="t-preview">
        <a href={`/shows/${id}`} className="t-link" onClick={this.handleClick}>
          <h3>{name}</h3>
        </a>
        <img src={image.original} alt={name} />
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
