import React, { Component } from 'react';
import propTypes from 'prop-types';

import shuffler from '../../helpers/shuffler';

class QuestionCard extends Component {
  render() {
    const { data = {} } = this.props;
    const { category, question, incorrect_answers, correct_answer } = data;

    const shuffleArray = [...incorrect_answers, correct_answer];

    return (
      <section>
        <p data-testid="question-category">{category}</p>
        <h3 data-testid="question-text">{question}</h3>
      </section>
    );
  }
}

export default QuestionCard;

QuestionCard.propTypes = {
  data: propTypes.object,
}.isRequired;
