import React, { Component } from 'react';
import propTypes from 'prop-types';
import shuffler from '../../helpers/shuffler';
import './style.css';

class QuestionCard extends Component {
  constructor() {
    super();

    this.state = {
      showColor: false,
      shuffleAnswers: [],
    };
  }

  componentDidUpdate(prevProps) {
    this.loadAnswers(prevProps);
  }

  handleClick = () => {
    this.setState({ showColor: true });
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

  render() {
    const { showColor, shuffleAnswers } = this.state;

    const { data: {
      category,
      question,
      correct_answer: correctAnswer,
    } } = this.props;

    return (
      <section>
        <p data-testid="question-category">{category}</p>
        <h3 data-testid="question-text">{question}</h3>

        <div data-testid="answer-options">
          {
            shuffleAnswers.map((answer, index) => (

              <button
                key={ index }
                type="button"
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

export default QuestionCard;

QuestionCard.propTypes = {
  data: propTypes.object,
}.isRequired;
