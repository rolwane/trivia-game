import React, { Component } from 'react';
import propTypes from 'prop-types';
import shuffler from '../../helpers/shuffler';

class QuestionCard extends Component {
  render() {
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
                  key={ answer }
                >
                  {answer}

                </button>);
            }
            return (
              <button
                type="button"
                data-testid={ `wrong-answer-${index}` }
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
