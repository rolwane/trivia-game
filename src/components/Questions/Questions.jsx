import React from 'react';
import { fetchQuestions, saveToken } from '../../services/fetchApi';
import { CODE_ERROR } from '../../helpers/constants';

import QuestionCard from '../QuestionCard/QuestionCard';

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentQuestion: 0,
    };
  }

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = async () => {
    const response = await this.getQuestions();

    if (response.response_code !== CODE_ERROR) {
      this.setState({ questions: response.results });
    } else {
      saveToken().then(async () => {
        const newResponse = await this.getQuestions();
        this.setState({ questions: newResponse.results });
      });
    }
  }

  getQuestions = async () => {
    const token = localStorage.getItem('token');
    const response = await fetchQuestions(token);
    return response;
  }

  handleClick = () => {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,
    }));
  }

  render() {
    const { questions, currentQuestion } = this.state;
    return (
      <div>
        <QuestionCard
          nextQuestions={ this.handleClick }
          data={ questions[currentQuestion] || {} }
        />
      </div>
    );
  }
}

export default Questions;
