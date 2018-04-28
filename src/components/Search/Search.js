import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ShowPreview from 'components/ShowPreview';

import { getSearchRequest } from 'actions/search';

class Search extends PureComponent {
  handleChange = () => {};
  handleClick = () => {};

  componentDidMount() {
    this.props.getSearchRequest();
  }

  render() {
    const { result, isLoading, error } = this.props;
    if (isLoading) {
      return <p>Данные загружаютcя...</p>;
    }
    if (error) {
      return <p>Произошла ошибка</p>;
    }
    return (
      <div>
        <input type="text" value="" onChange={this.handleChange} placeholder="Название сериала" />
        <button onClick={this.handleClick}>Найти</button>
        <div className="t-search-result">
          {result.map((serie, idx) => <ShowPreview key={serie.id} {...serie} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  error: state.search.error,
  result: state.search.result,
});

const mapDispatchToProps = { getSearchRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
