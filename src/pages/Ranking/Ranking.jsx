import React, { Component } from 'react';
import propTypes from 'prop-types';

class Ranking extends Component {
  render() {
    const { history } = this.props;

    return (
      <>
        <h1 data-testid="ranking-title">Ranking page</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => history.push('/') }
        >
          Inicio
        </button>
      </>
    );
  }
}

export default Ranking;

Ranking.propTypes = {
  history: propTypes.object,
}.idRequired;
