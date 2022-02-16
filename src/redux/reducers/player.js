import { GET_LOGIN, SAVE_SCORE } from '../actions/types';

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

  case SAVE_SCORE:
    return {
      ...state,
      score: payload + state.score,
    };

  default:
    return state;
  }
};

export default player;
