import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      gravatarEmail: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validadeButton);
  }

  validadeButton = () => {
    const { name, gravatarEmail } = this.state;
    return name.length > 0 && gravatarEmail.length > 0;
  }

  render() {
    const { name, gravatarEmail } = this.state;

    return (

      <form>
        <input
          type="text"
          name="name"
          data-testid="input-player-name"
          placeholder="Nome"
          value={ name }
          onChange={ this.handleChange }
        />

        <input
          type="email"
          name="gravatarEmail"
          data-testid="input-gravatar-email"
          placeholder="Email"
          value={ gravatarEmail }
          onChange={ this.handleChange }
        />

        <button
          type="submit"
          data-testid="btn-play"
          disabled={ !this.validadeButton() }
        >
          Play
        </button>
      </form>

    );
  }
}

export default Login;
