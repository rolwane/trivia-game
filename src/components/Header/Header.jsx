import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { name, gravatarEmail, score } = this.props;
    return (
      <header>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}` }
          alt="profile-img"
          data-testid="header-profile-picture"
        />
        <h2 data-testid="header-player-name">{ name }</h2>
        <span data-testid="header-score">{score}</span>
      </header>
    );
  }
}

const mapStateToProps = ({ player: { name, gravatarEmail, score } }) => ({
  name,
  gravatarEmail,
  score,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  gravatarEmail: PropTypes.string,
}.isRequired;
