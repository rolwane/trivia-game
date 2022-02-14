import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveToken } from '../../services/fetchApi';
import { actionSaveToken } from '../../redux/actions';

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

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatchSaveToken } = this.props;
    saveToken();
    dispatchSaveToken();
  }

  render() {
    const { name, gravatarEmail } = this.state;

    return (

      <form onSubmit={ this.handleSubmit }>
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

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveToken: () => dispatch(actionSaveToken()),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchSaveToken: PropTypes.func,
}.isrequired;
