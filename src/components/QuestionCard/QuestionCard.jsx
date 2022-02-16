import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionSaveScore } from '../../redux/actions';

import shuffler from '../../helpers/shuffler';
import {
  TIMER_NUMBER,
  LEVEL_EASY,
  LEVEL_MEDIUM,
  LEVEL_HARD,
  SCORE_BASE,
} from '../../helpers/constants';

import './style.css';

class QuestionCard extends Component {
  constructor() {
    super();
    this.state = {
      showColor: false,
      shuffleAnswers: [],
      timer: 30,
    };
  }

  componentDidMount() {
    this.handleTimer();
  }

  componentDidUpdate(prevProps) {
    this.loadAnswers(prevProps);
  }

  handleTimer = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer > 0 ? prevState.timer - 1 : prevState.timer,
      }));
      const { timer } = this.state;
      if (timer === 0) {
        clearInterval(this.interval);
      }
    }, TIMER_NUMBER);
  }

  handleClick = ({ target }) => {
    this.setState({ showColor: true });
    clearInterval(this.interval);
    this.calculateScore(target);
  }

  loadAnswers = (prevProps) => {
    const { data: {
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers = [],
    } } = this.props;

    if (question !== prevProps.data.question) {
      this.setState({ shuffleAnswers: shuffler([...incorrectAnswers, correctAnswer]) });
    }
  }

  calculateScore = (target) => {
    const clickedButton = target.getAttribute('data-testid');

    if (clickedButton === 'correct-answer') {
      const { timer } = this.state;
      const { data: { difficulty }, dispatchSaveScore } = this.props;

      const score = SCORE_BASE + (timer * this.scorePerLevel(difficulty));
      dispatchSaveScore(score);
    }
  }

  scorePerLevel = (level) => {
    if (level === 'hard') return LEVEL_HARD;
    if (level === 'medium') return LEVEL_MEDIUM;
    return LEVEL_EASY;
  }

  render() {
    const { showColor, shuffleAnswers, timer } = this.state;
    const { data: {
      category,
      question,
      correct_answer: correctAnswer,
    } } = this.props;

    return (
      <section>
        <p data-testid="question-category">{category}</p>
        <h3 data-testid="question-text">{question}</h3>
        <span>{timer}</span>
        <div data-testid="answer-options">
          {
            shuffleAnswers.map((answer, index) => (
              <button
                key={ index }
                type="button"
                disabled={ timer <= 0 }
                onClick={ this.handleClick }
                data-color={ showColor && (answer === correctAnswer ? 'green' : 'red') }
                data-testid={
                  answer === correctAnswer
                    ? 'correct-answer'
                    : `wrong-answer-${index}`
                }
              >
                {answer}
              </button>
            ))
          }
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveScore: (score) => dispatch(actionSaveScore(score)),
});

export default connect(null, mapDispatchToProps)(QuestionCard);

QuestionCard.propTypes = {
  data: propTypes.object,
}.isRequired;
