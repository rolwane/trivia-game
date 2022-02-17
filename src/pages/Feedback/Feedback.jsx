import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { ASSERTIONS } from '../../helpers/constants';

// imported components
import Header from '../../components/Header/Header';

class Feedback extends Component {
  render() {
    const { assertions, score, history } = this.props;
    return (
      <>
        <Header />
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
        <p data-testId="feedback-text">
          {
            assertions >= ASSERTIONS ? 'Well Done!' : 'Could be better...'
          }
        </p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => history.push('/') }
        >
          Play Again
        </button>

        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => history.push('/ranking') }
        >
          Ranking
        </button>
      </>
    );
  }
}

const mapStateToProps = ({ player: { assertions, score } }) => ({
  assertions,
  score,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  assertions: propTypes.string,
}.isRequired;
