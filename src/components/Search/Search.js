import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ShowPreview from 'components/ShowPreview';

import { getSeriesRequest } from 'actions/search';

class Search extends PureComponent {
  handleChange = () => {};
  handleClick = () => {};

  componentDidMount() {
    this.props.getSeriesRequest();
  }

  render() {
    const { series, isLoading, error } = this.props;
    if (isLoading) {
      return <p>Данные загружаютcя...</p>;
    }
    if (error) {
      return <p>Произошла ошибка</p>;
    }
    return (
      <div>
        <input type="text" value={{}} onChange={this.handleChange} placeholder="Название сериала" />
        <button onClick={this.handleClick}>Найти</button>
        <ShowPreview series={series} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
