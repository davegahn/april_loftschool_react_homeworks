import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './AppRouter.css';

class AppRouter extends PureComponent {
  render() {
    const { isLoading, error } = this.props;
    if (isLoading) {
      return <p>Данные загружаюся</p>;
    }
    if (error) {
      return <p>Ошибка</p>;
    }
    return <p>AppRouter</p>;
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error,
  series: state.series,
});

export default connect(mapStateToProps)(AppRouter);
