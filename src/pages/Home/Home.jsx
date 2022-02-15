import React, { Component } from 'react';
import PropTypes from 'prop-types';

// imported components
import Header from '../../components/Header/Header';

class Home extends Component {
  render() {
    return (
      <>
        <h2>Página Inicial</h2>
        <Header />
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  history: PropTypes.string,
}.isRequired;
