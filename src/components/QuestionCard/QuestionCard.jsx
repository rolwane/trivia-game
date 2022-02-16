import React, { Component } from 'react';
import propTypes from 'prop-types';
import shuffler from '../../helpers/shuffler';
import './style.css';
import { TIMER_NUMBER } from '../../helpers/constants';

class QuestionCard extends Component {
  constructor() {
    super();

    this.state = {
      showColor: false,
      timer: 30,
    };
  }

  componentDidMount() {
    this.handleTimer();
  }

  handleTimer = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer > 0 ? prevState.timer - 1 : prevState.timer,
      }));
    }, TIMER_NUMBER);
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
    const { timer } = this.state;
    return (
      <section>
        <p data-testid="question-category">{category}</p>
        <h3 data-testid="question-text">{question}</h3>
        <span>{timer}</span>
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
                  disabled={ timer <= 0 }
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
                disabled={ timer <= 0 }
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
