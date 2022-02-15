import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { name, gravatarEmail } = this.props;
    return (
      <header>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}` }
          alt="profile-img"
          data-testid="header-profile-picture"
        />
        <h2 data-testid="header-player-name">{ name }</h2>
        <span data-testid="header-score">0</span>
      </header>
    );
  }
}

const mapStateToProps = ({ player: { name, gravatarEmail } }) => ({
  name,
  gravatarEmail,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  gravatarEmail: PropTypes.string,
}.isRequired;
