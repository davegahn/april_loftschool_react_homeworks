import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getShowRequest } from 'actions/show';
import { ActorsList, Actor } from 'components/Styled';
class ShowPage extends PureComponent {
  componentWillMount() {
    this.props.getShowRequest(this.props.match.params.id);
  }

  render() {
    const { entities, isLoading, error } = this.props;
    if (isLoading) {
      return <p>Данные загружаютcя...</p>;
    }
    if (error) {
      return <p>Произошла ошибка</p>;
    }
    return (
      <div>
        <p>{entities.name}</p>
        {entities.image && <img src={entities.image.medium} alt={entities.name} />}
        <div dangerouslySetInnerHTML={{ __html: entities.summary }} />
        <ActorsList>
          {entities._embedded &&
            entities._embedded.cast.map((role, idx) => (
              <Actor key={idx} className="t-person">
                <p>{role.person.name}</p>
                {role.person.image && <img src={role.person.image.medium} alt={role.person.name} />}
              </Actor>
            ))}
        </ActorsList>
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
