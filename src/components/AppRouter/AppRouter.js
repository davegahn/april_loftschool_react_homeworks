import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './AppRouter.css';

import { getSeriesRequest } from 'actions/search';

class AppRouter extends PureComponent {
  componentDidMount() {
    const { getSeriesRequest } = this.props;
    getSeriesRequest();
  }

  render() {
    const { series, isLoading, error } = this.props;
    if (isLoading) {
      return <p>Данные загружаютcя...</p>;
    }
    if (error) {
      return <p>Ошибка</p>;
    }
    return (
      <div>
        <h1>Firefly</h1>
        {series.map(ep => (
          <div key={ep.id}>
            <img src={ep.image.original} alt={ep.name} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  error: state.search.error,
  series: state.search.series,
});

const mapDispatchToProps = { getSeriesRequest };

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
