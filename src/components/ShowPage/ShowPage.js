import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getShowRequest } from 'actions/show';

class ShowPage extends PureComponent {
  componentDidMount() {
    this.props.getShowRequest();
  }

  render() {
    const { entities, isLoading, error } = this.props;
    console.dir(entities._embedded);

    if (isLoading) {
      return <p>Данные загружаютcя...</p>;
    }
    if (error) {
      return <p>Произошла ошибка</p>;
    }
    return (
      <div>
        <p>{entities.name}</p>
        <img src={entities.image} alt={entities.name} />
        <div dangerouslySetInnerHTML={{ __html: entities.summary }} />
        {/* {entities._embedded.cast.map(person => console.log(person))} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.shows.isLoading,
  error: state.shows.error,
  entities: state.shows.entities,
});

const mapDispatchToProps = { getShowRequest };

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
