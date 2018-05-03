import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { PreviewItem } from 'components/Styled';
class ShowPreview extends PureComponent {
  render() {
    const { name, summary, image, id } = this.props;
    return (
      <PreviewItem className="t-preview">
        <Link to={`/shows/${id}`} className="t-link">
          <h3>{name}</h3>
        </Link>
        {image ? <img src={image.medium} alt={name} /> : null}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </PreviewItem>
    );
  }
}

export default ShowPreview;
