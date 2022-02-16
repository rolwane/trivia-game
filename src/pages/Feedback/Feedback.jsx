import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../../components/Header/Header';
import { ASSERTIONS } from '../../helpers/constants';

class Feedback extends Component {
  render() {
    const { assertions, score } = this.props;
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
