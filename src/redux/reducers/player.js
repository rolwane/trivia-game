import { GET_LOGIN } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_LOGIN:
    return {
      ...state,
      name: payload.name,
      gravatarEmail: payload.gravatarEmail,
    };

  default:
    return state;
  }
};

export default player;
