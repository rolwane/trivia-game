import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { ASSERTIONS } from '../../helpers/constants';
/* [
  { name: nome-da-pessoa, score: 10, picture: url-da-foto-no-gravatar }
] */

// imported components
import Header from '../../components/Header/Header';
import { actionReset } from '../../redux/actions';

class Feedback extends Component {
  playAgain = () => {
    const { history, dispatchReset } = this.props;
    history.push('/');
    dispatchReset();
  }

  render() {
    const { assertions, score, history } = this.props;
    return (
      <>
        <Header />
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
        <p data-testid="feedback-text">
          {
            assertions >= ASSERTIONS ? 'Well Done!' : 'Could be better...'
          }
        </p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgain }
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
const mapDispatchToProps = (dispatch) => ({
  dispatchReset: () => dispatch(actionReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  assertions: propTypes.string,
}.isRequired;
