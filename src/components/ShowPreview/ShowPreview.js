<<<<<<< HEAD
import React, { Component } from 'react';

export default class ShowPreview extends Component {
  render() {
    const { series } = this.props;
=======
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
class ShowPreview extends PureComponent {

  render () {
    const {name, summary, image, id} = this.props;
>>>>>>> 88cb5d4d2332e8790e06a1a4a1b15ef4ccfed836
    return (
      <div className="t-preview">
        <Link to={`/shows/${id}`} className="t-link">
          <h3>{name}</h3>
        </Link>
        {image ? <img src={image.medium} alt={name} /> : null}
        <div dangerouslySetInnerHTML={{__html: summary}} />
      </div>
    );
  }
}

export default ShowPreview;
