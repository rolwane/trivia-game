import React from 'react';

class QuestionCard extends React.Component {
  render() {
    const { data: { category, question, correct_answer } } = this.props;
    return (
      <section>
        <p data-testid="question-category">{category}</p>
        <h3 data-testid="question-text">{question}</h3>
        {}
      </section>
    );
  }
}

export default QuestionCard;
