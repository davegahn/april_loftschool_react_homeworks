import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ShowPreview from 'components/ShowPreview';
import { PreviewList, ResultNotFound } from 'components/Styled';
import { getSearchRequest } from 'actions/search';

class Search extends PureComponent {
  handleChange = event => {
    this.phrase = event.target.value;
    return this.phrase;
  };

  handleClick = () => {
    this.props.getSearchRequest(this.phrase);
  };

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
        <div>
          <input
            type="text"
            onChange={evt => this.handleChange(evt)}
            placeholder="Название сериала"
          />
          <button onClick={this.handleClick}>Найти</button>
        </div>
        <PreviewList className="t-search-result">
          {result.length ? (
            result.map((serie, idx) => <ShowPreview key={serie.id} {...serie} />)
          ) : (
            <ResultNotFound>
              <p>Вариантов не найдено</p>
            </ResultNotFound>
          )}
        </PreviewList>
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
