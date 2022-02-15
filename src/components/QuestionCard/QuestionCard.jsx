import React, { Component } from 'react';
import propTypes from 'prop-types';
import shuffler from '../../helpers/shuffler';
import './style.css';

class QuestionCard extends Component {
  constructor() {
    super();

    this.state = {
      showColor: false,
    };
  }

  handleClick = () => {
    this.setState({
      showColor: true,
    });
  }

  render() {
    const { showColor } = this.state;
    const { data = {} } = this.props;
    const {
      category,
      question,
      incorrect_answers: incorrectAnswers = [],
      correct_answer: correctAnswer,
    } = data;

    const shuffleArray = shuffler([...incorrectAnswers, correctAnswer]);

    return (
      <section>
        <p data-testid="question-category">{category}</p>
        <h3 data-testid="question-text">{question}</h3>
        <div data-testid="answer-options">
          {shuffleArray.map((answer, index) => {
            if (answer === correctAnswer) {
              return (
                <button
                  type="button"
                  data-testid="correct-answer"
                  data-color={ showColor && 'green' }
                  onClick={ this.handleClick }
                  key={ answer }
                >
                  {answer}

                </button>);
            }
            return (
              <button
                type="button"
                data-testid={ `wrong-answer-${index}` }
                data-color={ showColor && 'red' }
                onClick={ this.handleClick }
                key={ answer }
              >
                {answer}

              </button>);
          })}
        </div>

      </section>
    );
  }
}

export default QuestionCard;

QuestionCard.propTypes = {
  data: propTypes.object,
}.isRequired;
