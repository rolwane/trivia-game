import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class Feedback extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="feedback-text">Olá Mundo!</div>
      </>
    );
  }
}
export default Feedback;
