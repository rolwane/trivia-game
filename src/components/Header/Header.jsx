import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src="" alt="profile-img" data-testid="header-profile-picture" />
        <h2 data-testid="header-player-name">Nome</h2>
        <span data-testid="header-score">0</span>
      </header>
    );
  }
}
