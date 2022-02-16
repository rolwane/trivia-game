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
    const interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer > 0 ? prevState.timer - 1 : prevState.timer,
      }));
      const { timer } = this.state;
      if (timer === 0) {
        clearInterval(interval);
      }
    }, TIMER_NUMBER);
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

export default QuestionCard;

QuestionCard.propTypes = {
  data: propTypes.object,
}.isRequired;
