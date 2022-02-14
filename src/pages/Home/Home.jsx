import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <h2>Página Inicial</h2>
    );
  }
}

export default Home;

Home.propTypes = {
  history: PropTypes.string,
}.isRequired;
