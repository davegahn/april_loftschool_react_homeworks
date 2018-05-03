import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getShowRequest} from 'actions/show';

class ShowPage extends PureComponent {
  componentDidMout () {
    this.props.getShowRequest (this.props.match.params.id);
  }

  render () {
    const {entities, isLoading, error} = this.props;
    if (isLoading) {
      return <p>Данные загружаютcя...</p>;
    }
    if (error) {
      return <p>Произошла ошибка</p>;
    }
    return (
      <div>
        <p>{entities.name}</p>
        {entities.image
          ? <img src={entities.image.medium} alt={entities.name} />
          : null}
        <div dangerouslySetInnerHTML={{__html: entities.summary}} />
        {entities._embedded
          ? entities._embedded.cast.map (role => {
              console.log (role.person.id);
              <div key={role.person.id} className="t-person">
                <p>{role.person.name}</p>
                {role.person.image
                  ? <img
                      src={role.person.image.medium}
                      alt={role.person.name}
                    />
                  : null}
              </div>;
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.shows.isLoading,
  error: state.shows.error,
  entities: state.shows.entities,
});

const mapDispatchToProps = {getShowRequest};

export default connect (mapStateToProps, mapDispatchToProps) (ShowPage);
