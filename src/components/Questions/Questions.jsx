import React from 'react';
import { fetchQuestions, saveToken, validateToken } from '../../services/fetchApi';
import QuestionCard from '../QuestionCard/QuestionCard';

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    if (validateToken()) {
      this.loadQuestions();
    } else {
      saveToken().then(this.loadQuestions);
    }
  }

    loadQuestions = () => {
      const token = localStorage.getItem('token');
      fetchQuestions(token).then(({ results }) => {
        this.setState({
          questions: results,
        });
      });
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
