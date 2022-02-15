import React from 'react';
import { fetchQuestions, saveToken } from '../../services/fetchApi';
import { CODE_ERROR } from '../../helpers/constants';

import QuestionCard from '../QuestionCard/QuestionCard';

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
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

  render() {
    const { questions } = this.state;
    return (
      <div>
        Oi questions
        <QuestionCard data={ questions[0] } />
      </div>
    );
  }
}

export default Questions;
